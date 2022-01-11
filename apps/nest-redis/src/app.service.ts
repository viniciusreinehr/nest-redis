import { Inject, Injectable } from '@nestjs/common';
import { ClientRedis } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('REDIS.MS') private client: ClientRedis) {}

  getHello(): boolean {
    try {
      console.log('Chamando o primeiro');
      this.client
        .emit('first', 'bora po')
        .toPromise()
        .then((data) => data)
        .catch((e) => {
          console.error(e);
          return e;
        });

      return true;
    } catch (err) {
      console.log(err);
      false;
    }
  }
}
