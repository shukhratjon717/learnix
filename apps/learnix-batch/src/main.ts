import { NestFactory } from '@nestjs/core';
import { LearnixBatchModule } from './learnix-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(LearnixBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
