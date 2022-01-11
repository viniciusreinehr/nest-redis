import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SecondService } from './second.service';

@Controller()
export class SecondController {
  constructor(private readonly secondService: SecondService) {}

  @MessagePattern('second')
  getHello(param): string {
    if (this.secondService.getHello(param)) {
      return 'Chamou o terceiro';
    }

    return 'Não conseguiu chamar o terceiro!';
  }
}
