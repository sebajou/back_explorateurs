import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateExplorateurDto } from 'src/explorateurs/dto/create-explorateur.dto';
import { UpdateExplorateurDto } from 'src/explorateurs/dto/update-explorateur.dto';
import { ExplorateurService } from 'src/services/explorateur.service';

@Controller('explorateur')
export class ExplorateurController {
  constructor(private readonly explorateurService: ExplorateurService) {}

  @Post()
  async createExplorateur(
    @Res() response,
    @Body() createExplorateurDto: CreateExplorateurDto,
  ) {
    try {
      const newExplorateur = await this.explorateurService.createExplorateur(
        createExplorateurDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Explorateur has been created successfully',
        newExplorateur,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Explorateur not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateExplorateur(
    @Res() response,
    @Param('id') explorateurId: string,
    @Body() updateExplorateurDto: UpdateExplorateurDto,
  ) {
    try {
      const existingExplorateur =
        await this.explorateurService.updateExplorateur(
          explorateurId,
          updateExplorateurDto,
        );
      return response.status(HttpStatus.OK).json({
        message: 'Explorateur has been successfully updated',
        existingExplorateur,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getExplorateurs(@Res() response) {
    try {
      const explorateurData =
        await this.explorateurService.getAllExplorateurs();
      return response.status(HttpStatus.OK).json({
        message: 'All explorateurs data found successfully',
        explorateurData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getExplorateur(@Res() response, @Param('id') explorateurId: string) {
    try {
      const existingExplorateur = await this.explorateurService.getExplorateur(
        explorateurId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Explorateur found successfully',
        existingExplorateur,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteExplorateur(@Res() response, @Param('id') explorateurId: string) {
    try {
      const deletedExplorateur =
        await this.explorateurService.deleteExplorateur(explorateurId);
      return response.status(HttpStatus.OK).json({
        message: 'Explorateur deleted successfully',
        deletedExplorateur,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
