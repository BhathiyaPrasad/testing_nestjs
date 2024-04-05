import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechhackModule } from './techhack/techhack.module';
import { CrudModule } from './crud/crud.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TechhackModule, CrudModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
