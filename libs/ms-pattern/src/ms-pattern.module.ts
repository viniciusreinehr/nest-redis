import { Module } from '@nestjs/common';
import { MsPatternService } from './ms-pattern.service';

@Module({
  providers: [MsPatternService],
  exports: [MsPatternService],
})
export class MsPatternModule {}
