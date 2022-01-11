import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FirstService } from './first.service';

@Controller()
export class FirstController {
  constructor(private readonly firstService: FirstService) {}

  @MessagePattern('first')
  getHello(param): string {
    if (this.firstService.getHello(param)) {
      return 'Chamou o segundo!';
    }

    return 'Não conseguiu chamar o segundo!';
  }
}
