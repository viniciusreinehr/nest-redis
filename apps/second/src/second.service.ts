import { Inject, Injectable } from '@nestjs/common';
import { ClientRedis } from '@nestjs/microservices';

@Injectable()
export class SecondService {
  constructor(@Inject('REDIS.MS') private client: ClientRedis) {}

  getHello(param): boolean {
    try {
      console.log(`Chamando o terceiro: ${param}`);
      this.client
        .emit('third', 'bora po')
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
