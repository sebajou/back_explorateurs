import { Test, TestingModule } from '@nestjs/testing';
import { ExplorateursController } from './explorateurs.controller';

describe('ExplorateursController', () => {
  let controller: ExplorateursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExplorateursController],
    }).compile();

    controller = module.get<ExplorateursController>(ExplorateursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
