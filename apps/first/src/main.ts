import { MsPatternService } from '@app/ms-pattern';
import { FirstModule } from './first.module';

async function bootstrap() {
  const app = await MsPatternService.create(FirstModule);
  app.listen();
  console.log('Server first started');
}
bootstrap();
