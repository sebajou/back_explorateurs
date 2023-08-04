import { PartialType } from '@nestjs/mapped-types';
import { CreateExplorateurDto } from './create-explorateur.dto';

export class UpdateExplorateurDto extends PartialType(CreateExplorateurDto) {}