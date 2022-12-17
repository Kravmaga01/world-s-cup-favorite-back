import { Module } from "@nestjs/common";
import { SeedService } from "./seed.service";
import { SeedController } from "./seed.controller";
import { FootballTeamModule } from "../footballTeam/football-team.module";

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [FootballTeamModule],
})
export class SeedModule {}
