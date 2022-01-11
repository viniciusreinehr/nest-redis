import { Test, TestingModule } from '@nestjs/testing';
import { MsPatternService } from './ms-pattern.service';

describe('MsPatternService', () => {
  let service: MsPatternService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsPatternService],
    }).compile();

    service = module.get<MsPatternService>(MsPatternService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
