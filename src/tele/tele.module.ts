import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { TeleService } from './tele.service';
import { TeleUpdate } from './tele.update';

@Module({
  providers: [TeleService, TeleUpdate],
  imports: [PrismaModule],
})
export class TeleModule {}
