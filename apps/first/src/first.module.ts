import { MsPatternService } from '@app/ms-pattern';
import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';

@Module({
  imports: [MsPatternService.connect('REDIS.MS')],
  controllers: [FirstController],
  providers: [FirstService],
})
export class FirstModule {}
