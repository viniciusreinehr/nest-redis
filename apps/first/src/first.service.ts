import { Inject, Injectable } from '@nestjs/common';
import { ClientRedis } from '@nestjs/microservices';

@Injectable()
export class FirstService {
  constructor(@Inject('REDIS.MS') private client: ClientRedis) {}

  getHello(param): boolean {
    try {
      console.log(`Chamando o segundo: ${param}`);
      this.client
        .emit('second', 'bora po')
        .toPromise()
        .then((data) => data)
        .catch((e) => {
          console.error(e);
          return e;
        });

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
