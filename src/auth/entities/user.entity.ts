import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail } from "class-validator";

@Entity("user")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", {
    unique: true,
  })
  email: string;

  @Column("varchar", {
    select: false,
  })
  password: string;

  @Column("varchar", {
    unique: true,
    nullable: false,
  })
  fullName: string;

  @Column("boolean", {
    nullable: false,
    default: true,
  })
  isActive: boolean;

  @Column("varchar", {
    array: true,
    default: ["user"],
  })
  roles: string[];

  @Column("int")
  age: number;

  @Column("varchar")
  country: string;
}
