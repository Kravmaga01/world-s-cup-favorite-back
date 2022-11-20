import {
  IsNumber,
  IsPositive,
  IsString,
  min,
  Min,
  MinLength,
} from "class-validator";

export class CreateCountryDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  @Min(1)
  @IsPositive()
  noCountry: number;

  @MinLength(12)
  @IsString()
  flag: string;

  @IsNumber()
  @Min(0)
  favoritePoint: number;
}
