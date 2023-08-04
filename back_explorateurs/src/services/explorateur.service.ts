import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateExplorateurDto } from 'src/explorateurs/dto/create-explorateur.dto';
import { IExplorateur } from '../interface/explorateur.interface';
import { Model } from 'mongoose';
import { UpdateExplorateurDto } from '../explorateurs/dto/update-explorateur.dto';
import { explorateurs } from 'src/explorateurs/seed.explorateurs';

@Injectable()
export class ExplorateurService {
  constructor(
    @InjectModel('Explorateur') private explorateurModel: Model<IExplorateur>,
  ) {}

  /* async onModuleInit() {
    try {
      const res = await this.getAllExplorateurs(); // this method returns user data exist in database (if any)
      // checks if any user data exist
      if (res['data'] == 0) {
        const newUser = {
          name: 'yourname',
          email: 'youremail@gmail.com',
          username: 'yourusername',
        };
        const created_explorateur = await explorateurs.forEach((e) =>
          this.createExplorateur(e),
        ); // this method creates new user in database
        console.log(created_explorateur);
      }
    } catch (error) {
      throw error;
    }
  } */

  async createExplorateur(
    createExplorateurDto: CreateExplorateurDto,
  ): Promise<IExplorateur> {
    const newExplorateur = await new this.explorateurModel(
      createExplorateurDto,
    );
    return newExplorateur.save();
  }

  async updateExplorateur(
    explorateurId: string,
    updateExplorateurDto: UpdateExplorateurDto,
  ): Promise<IExplorateur> {
    const existingExplorateur = await this.explorateurModel.findByIdAndUpdate(
      explorateurId,
      updateExplorateurDto,
      { new: true },
    );
    if (!existingExplorateur) {
      throw new NotFoundException(`Explorateur #${explorateurId} not found`);
    }
    return existingExplorateur;
  }

  async getAllExplorateurs(): Promise<IExplorateur[]> {
    const explorateurData = await this.explorateurModel.find();
    if (!explorateurData || explorateurData.length == 0) {
      throw new NotFoundException('Explorateurs data not found!');
    }
    return explorateurData;
  }

  async getExplorateur(explorateurId: string): Promise<IExplorateur> {
    const existingExplorateur = await this.explorateurModel
      .findById(explorateurId)
      .exec();
    if (!existingExplorateur) {
      throw new NotFoundException(`Explorateur #${explorateurId} not found`);
    }
    return existingExplorateur;
  }

  async deleteExplorateur(explorateurId: string): Promise<IExplorateur> {
    const deletedExplorateur = await this.explorateurModel.findByIdAndDelete(
      explorateurId,
    );
    if (!deletedExplorateur) {
      throw new NotFoundException(`Explorateur #${explorateurId} not found`);
    }
    return deletedExplorateur;
  }
}
