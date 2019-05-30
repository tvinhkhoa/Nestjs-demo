import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
// import { ConfigModule } from 'nestjs-config';

import { BootstrapModule } from './bootstrap/bootstrap.module';
import { ItemsModule } from './items/items.module';
import { ConfigService } from 'nestjs-config';
import { LoggerMiddleware } from '../middleware/logger.middleware';
import { CorsMiddleware } from '../middleware/cors.middleware';
import * as path from 'path';

ConfigService.rootPath = path.resolve(__dirname, '..');

@Module({
  imports: [
    BootstrapModule,
    ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private readonly config: ConfigService) {
    this.config = config;
    console.log(config);

    const appConfig = this.config.get('database');
    console.log( 'App config is',  appConfig ); // App URL is undefined
  }
}
