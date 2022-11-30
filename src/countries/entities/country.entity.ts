import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Country extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    index: true,
  })
  group: string;

  @Prop({
    unique: true,
    index: true,
  })
  flag: string;

  @Prop({
    index: true,
  })
  favoritePoint: number;

  @Prop({})
  gamesPlayed: number;

  @Prop({})
  gamesWon: number;

  @Prop({})
  lostMatches: number;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
