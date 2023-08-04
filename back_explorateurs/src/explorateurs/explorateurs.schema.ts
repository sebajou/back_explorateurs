import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Explorateur {
  @Prop()
  name: string;
  @Prop()
  roleNumber: number;
  @Prop()
  class: string;
  @Prop()
  gender: string;
  @Prop()
  birth: number;
  death: number;
}
export const ExplorateurSchema = SchemaFactory.createForClass(Explorateur);
