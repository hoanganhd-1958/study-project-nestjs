import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CatsMiddleware } from './cats/cats.middleware';

@Module({
  imports: [CatsModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CatsMiddleware)
      .forRoutes({path: 'cats', method: RequestMethod.GET})
  }
}
