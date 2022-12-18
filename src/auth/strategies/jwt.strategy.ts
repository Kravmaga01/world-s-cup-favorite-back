import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { Users } from "../entities/user.entity";
import { JwtPayload } from "../interfaces/jwt-payload.interface";

export class JwtStrategy extends PassportStrategy(Strategy) {
  async validate(payload: JwtPayload): Promise<Users> {
    const { email } = payload;
    return;
  }
}
