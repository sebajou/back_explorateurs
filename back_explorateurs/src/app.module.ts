import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExplorateurController } from './explorateurs/explorateurs.controller';
import { ExplorateurSchema } from './explorateurs/explorateurs.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ExplorateurService } from './services/explorateur.service';
import { CommandModule } from 'nestjs-command';
import { ExplorateurSeed } from './explorateurs/seed.explorateurs';

const username = encodeURIComponent('sebajou');

const password = encodeURIComponent('xxxx');

const uri = `mongodb+srv://${username}:${password}@clusterexplorateur.jotdnw9.mongodb.net/?retryWrites=true&w=majority`;

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sebajou:xxxx@clusterexplorateur.jotdnw9.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'db_explorateurs',
      },
    ),
    MongooseModule.forFeature([
      { name: 'Explorateur', schema: ExplorateurSchema },
    ]),
    CommandModule,
  ],
  controllers: [AppController, ExplorateurController],
  providers: [AppService, ExplorateurService, ExplorateurSeed],
})
export class AppModule {}
