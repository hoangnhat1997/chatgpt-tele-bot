import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { TeleModule } from './tele/tele.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  controllers: [AppController],
  imports: [
    TelegrafModule.forRoot({
      token: '6235829440:AAEhLU2uyoFj0zGWRGGNjGnJy0K-zGRpYL0',
    }),
    TeleModule,
    PrismaModule,
  ],
})
export class AppModule {}
