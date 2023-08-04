import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { StringExpressionOperator } from 'mongoose';

export class CreateExplorateurDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  readonly roleNumber: number;
  @IsString()
  @IsNotEmpty()
  readonly class: string;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gender: string;
  @IsNumber()
  readonly birth: number;
  readonly death: number;
}
