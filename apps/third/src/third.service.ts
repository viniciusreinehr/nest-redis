import { Injectable } from '@nestjs/common';

@Injectable()
export class ThirdService {
  getHello(param): string {
    console.log(`Third say: Hello World! ${param}`);
    return 'Third say: Hello World!';
  }
}
