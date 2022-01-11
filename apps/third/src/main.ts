import { MsPatternService } from '@app/ms-pattern';
import { ThirdModule } from './third.module';

async function bootstrap() {
  const app = await MsPatternService.create(ThirdModule);
  app.listen();
  console.log('Server third started');
}
bootstrap();
