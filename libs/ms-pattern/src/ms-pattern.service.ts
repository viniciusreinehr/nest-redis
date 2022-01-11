import { Injectable } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  ClientsModule,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class MsPatternService {
  static async create(module) {
    return await NestFactory.createMicroservice<MicroserviceOptions>(module, {
      transport: Transport.REDIS,
      options: {
        url: process.env.REDIS_URL,
        password: process.env.REDIS_PASS,
      },
    });
  }

  static async connect(service) {
    return ClientsModule.register([
      {
        name: service,
        transport: Transport.REDIS,
        options: {
          url: process.env.REDIS_URL,
          password: process.env.REDIS_PASS,
        },
      },
    ]);
  }
}
