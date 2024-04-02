import { Test, TestingModule } from '@nestjs/testing';
import { TechhackService } from './techhack.service';

describe('TechhackService', () => {
  let service: TechhackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechhackService],
    }).compile();

    service = module.get<TechhackService>(TechhackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
