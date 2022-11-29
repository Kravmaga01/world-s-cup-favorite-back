import { UsersModule } from "./users/users.module";
import { Module } from "@nestjs/common";
import { CountriesModule } from "./countries/countries.module";
import { SeedModule } from "./seed/seed.module";
import { MongooseModule } from "@nestjs/mongoose";
import { CommonModule } from "./common/common.module";
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [
    CommonModule,
    UsersModule,
    CountriesModule,
    SeedModule,

    MongooseModule.forRoot(
      "mongodb+srv://kravmaga:Holagmail01@cluster0.silh5ua.mongodb.net/?retryWrites=true&w=majority",
      {
        authMechanism: "SCRAM-SHA-1",
      }
    ),

    GroupsModule,
  ],
  providers: [],
})
export class AppModule {}
