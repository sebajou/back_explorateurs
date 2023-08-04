import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { ExplorateurSeed } from './explorateurs/seed.explorateurs';

@Module({
  imports: [CommandModule],
  providers: [ExplorateurSeed],
  exports: [ExplorateurSeed],
})
export class SeedsModule {}
