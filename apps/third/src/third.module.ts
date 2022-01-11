import { Module } from '@nestjs/common';
import { ThirdController } from './third.controller';
import { ThirdService } from './third.service';

@Module({
  imports: [],
  controllers: [ThirdController],
  providers: [ThirdService],
})
export class ThirdModule {}
