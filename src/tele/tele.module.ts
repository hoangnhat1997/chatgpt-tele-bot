import { Module } from '@nestjs/common';

import { TeleService } from './tele.service';
import { TeleUpdate } from './tele.update';

@Module({
  providers: [TeleService, TeleUpdate],
})
export class TeleModule {}
