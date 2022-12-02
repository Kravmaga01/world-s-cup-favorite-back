import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CountriesService } from "./countries.service";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { ParseMongoIdPipe } from "../common/pipes/parse-mongo-id/parse-mongo-id.pipe";

@Controller("countries")
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  create(@Body() createCountryDto: CreateCountryDto): Promise<void> {
    return this.countriesService.create(createCountryDto);
  }

  @Get()
  findAll() {
    return this.countriesService.findAll();
  }

  @Get(":term")
  findOne(@Param("term") term: string) {
    return this.countriesService.findOne(term);
  }

  @Patch(":term")
  update(
    @Param("term") term: string,
    @Body() updateCountryDto: UpdateCountryDto
  ) {
    return this.countriesService.update(term, updateCountryDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseMongoIdPipe) id: string) {
    return this.countriesService.remove(id);
  }
}
