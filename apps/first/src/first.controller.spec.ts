import { Test, TestingModule } from '@nestjs/testing';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';

describe('FirstController', () => {
  let firstController: FirstController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FirstController],
      providers: [FirstService],
    }).compile();

    firstController = app.get<FirstController>(FirstController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(firstController.getHello()).toBe('Hello World!');
    });
  });
});
