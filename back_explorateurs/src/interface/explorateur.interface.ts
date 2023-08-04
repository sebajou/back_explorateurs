import { Document } from 'mongoose';
export interface IExplorateur extends Document {
  readonly name: string;
  readonly roleNumber: number;
  readonly class: number;
  readonly gender: string;
  readonly birth: number;
  readonly depth: number;
}
