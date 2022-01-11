import { MsPatternService } from '@app/ms-pattern';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MsPatternService.connect('REDIS.MS')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
