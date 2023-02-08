import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

import { AppController } from './app.controller';
import { TeleModule } from './tele/tele.module';

@Module({
  controllers: [AppController],
  imports: [
    TelegrafModule.forRoot({
      token: '6235829440:AAEhLU2uyoFj0zGWRGGNjGnJy0K-zGRpYL0',
    }),
    TeleModule,
  ],
})
export class AppModule {}
