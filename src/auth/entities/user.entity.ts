import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

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

  @BeforeInsert()
  checkFieldsBeForeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeInsert() {
    this.checkFieldsBeForeInsert();
  }
}
