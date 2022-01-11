import { MsPatternService } from '@app/ms-pattern';
import { Module } from '@nestjs/common';
import { SecondController } from './second.controller';
import { SecondService } from './second.service';

@Module({
  imports: [MsPatternService.connect('REDIS.MS')],
  controllers: [SecondController],
  providers: [SecondService],
})
export class SecondModule {}
