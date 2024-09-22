import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap()
  .then((x) => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port${3000}`, x);
  })
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  });
