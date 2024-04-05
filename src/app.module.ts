import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechhackModule } from './techhack/techhack.module';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [TechhackModule, CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
