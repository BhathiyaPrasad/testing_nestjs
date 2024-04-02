import { Test, TestingModule } from '@nestjs/testing';
import { TechhackController } from './techhack.controller';

describe('TechhackController', () => {
  let controller: TechhackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechhackController],
    }).compile();

    controller = module.get<TechhackController>(TechhackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
