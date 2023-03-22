import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { TeleModule } from './tele/tele.module';
import { PrismaModule } from './prisma/prisma.module';
import { env } from 'process';

@Module({
  controllers: [AppController],
  imports: [
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_TOKEN,
    }),
    TeleModule,
    PrismaModule,
  ],
})
export class AppModule {}
