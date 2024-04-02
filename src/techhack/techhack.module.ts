import { Module } from '@nestjs/common';
import { TechhackController } from './techhack.controller';
import { TechhackService } from './techhack.service';

@Module({
  controllers: [TechhackController],
  providers: [TechhackService]
})
export class TechhackModule {}
