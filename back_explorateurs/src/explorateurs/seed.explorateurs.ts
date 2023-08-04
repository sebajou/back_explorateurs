import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { ExplorateurService } from '../services/explorateur.service';

export const explorateurs = [
  {
    roleNumber: 15,
    name: 'Magelan',
    class: 'real',
    gender: 'male',
    birth: 1498,
    death: 1543,
  },
  {
    roleNumber: 12,
    name: 'Indiana Jones',
    class: 'fiction',
    gender: 'male',
    birth: 1899,
    death: 1955,
  },
  {
    roleNumber: 13,
    name: 'Peres',
    class: 'real',
    gender: 'male',
    birth: 1850,
    death: 1939,
  },
  {
    roleNumber: 14,
    name: 'Lewis and Curtis',
    class: 'real',
    gender: 'male',
    birth: 1801,
    death: 1856,
  },
  {
    roleNumber: 15,
    name: 'Cortes',
    class: 'real',
    gender: 'male',
    birth: 1550,
    death: 1602,
  },
  {
    roleNumber: 15,
    name: 'Adnenson',
    class: 'real',
    gender: 'male',
    birth: 1887,
    death: 1927,
  },
  {
    roleNumber: 16,
    name: 'Crocodylle Dunes',
    class: 'fiction',
    gender: 'male',
    birth: 1943,
    death: 1999,
  },
  {
    roleNumber: 17,
    name: 'Lara Croft',
    class: 'fiction',
    gender: 'female',
    birth: 1990,
    death: 2015,
  },
];

@Injectable()
export class ExplorateurSeed {
  constructor(private readonly explorateurService: ExplorateurService) {}

  @Command({
    command: 'create:explorateur',
    describe: 'create an explorateur',
  })
  async create() {
    explorateurs.forEach(async (e) => {
      const created_explorator =
        await this.explorateurService.createExplorateur(e);
      console.log(`This ${created_explorator} is created`);
    });
  }
}
