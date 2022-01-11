import { Test, TestingModule } from '@nestjs/testing';
import { ThirdController } from './third.controller';
import { ThirdService } from './third.service';

describe('ThirdController', () => {
  let thirdController: ThirdController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ThirdController],
      providers: [ThirdService],
    }).compile();

    thirdController = app.get<ThirdController>(ThirdController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(thirdController.getHello()).toBe('Hello World!');
    });
  });
});
