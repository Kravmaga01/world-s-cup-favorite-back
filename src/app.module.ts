import { UsersModule } from "./users/users.module";
import { Module } from "@nestjs/common";
import { CountriesModule } from "./countries/countries.module";
import { SeedModule } from "./seed/seed.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    UsersModule,
    CountriesModule,
    SeedModule,
    MongooseModule.forRoot(
      "mongodb+srv://kravmaga:Holagmail01@cluster0.silh5ua.mongodb.net/?retryWrites=true&w=majority",
      {
        authMechanism: "SCRAM-SHA-1",
      }
    ),
  ],
})
export class AppModule {}