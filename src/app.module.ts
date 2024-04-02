import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechhackModule } from './techhack/techhack.module';

@Module({
  imports: [TechhackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
