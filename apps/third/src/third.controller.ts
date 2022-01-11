import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ThirdService } from './third.service';

@Controller()
export class ThirdController {
  constructor(private readonly thirdService: ThirdService) {}

  @MessagePattern('third')
  getHello(param): string {
    return this.thirdService.getHello(param);
  }
}
