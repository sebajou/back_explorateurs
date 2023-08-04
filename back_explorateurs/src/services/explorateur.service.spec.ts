import { Test, TestingModule } from '@nestjs/testing';
import { ExplorateurService } from './explorateur.service';

describe('ExplorateurService', () => {
  let service: ExplorateurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExplorateurService],
    }).compile();

    service = module.get<ExplorateurService>(ExplorateurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
