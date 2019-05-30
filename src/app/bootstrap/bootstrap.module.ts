import * as path from 'path';
import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from '../../middleware/logger.middleware';
import { CorsMiddleware } from '../../middleware/cors.middleware';
import { ConfigModule } from 'nestjs-config';

@Module({
    imports: [
      ConfigModule.resolveRootPath(__dirname).load('config/**/!(*.d).{ts,js}'),
    ],
})

export class BootstrapModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: 'items*', method: RequestMethod.ALL },
        { path: 'cats', method: RequestMethod.GET }
      );
    consumer
      .apply(CorsMiddleware)
      .forRoutes(
        { path: '*', method: RequestMethod.ALL }
      );
  }
}