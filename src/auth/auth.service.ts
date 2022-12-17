import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Users } from "./entities/user.entity";
import { CreateUserDto, LoginUserDto, UpdateUserDto } from "./dto/index";
import { handleException } from "../exeptions/handleExetions.exception";
import * as bycrpt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly userReposity: Repository<Users>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const { password, ...userDate } = createUserDto;
    try {
      const user = this.userReposity.create({
        ...userDate,
        password: bycrpt.hashSync(password, 10),
      });
      await this.userReposity.save(user);
      delete user.password;
      return user;
    } catch (error) {
      handleException(error, "user");
    }
  }
  async login(LoginUserDto: LoginUserDto): Promise<Users> {
    const { password, email } = LoginUserDto;
    const user = await this.userReposity.findOne({
      where: { email },
      select: { email: true, password: true },
    });
    if (!user) throw new UnauthorizedException(`credenciales no validas `);
    if (!bycrpt.compareSync(password, user.password))
      throw new UnauthorizedException(`credenciales no validas `);
    return user;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
