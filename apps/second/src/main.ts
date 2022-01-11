import { MsPatternService } from '@app/ms-pattern';
import { SecondModule } from './second.module';

async function bootstrap() {
  const app = await MsPatternService.create(SecondModule);
  app.listen();
  console.log('Server second started');
}
bootstrap();
