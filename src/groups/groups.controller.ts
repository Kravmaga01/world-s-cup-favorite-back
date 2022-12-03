import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { GroupsService } from "./groups.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group } from "./entities/group.entity";
import { User } from "../users/entities/user.entity";

@Controller("groups")
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto): Promise<Group> {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  findAll(): Promise<Group[]> {
    return this.groupsService.findAll();
  }

  @Get(":term")
  findOne(@Param("term") term: string): Promise<Group> {
    return this.groupsService.findOne(term);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(+id, updateGroupDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.groupsService.remove(+id);
  }
}