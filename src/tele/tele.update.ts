import { Ctx, On, Start, Update } from 'nestjs-telegraf';
import { Scenes } from 'telegraf';
import { Message } from 'telegraf/typings/core/types/typegram';

import { TeleService } from './tele.service';

@Update()
export class TeleUpdate {
  constructor(private readonly teleService: TeleService) {}

  @Start()
  public async start(@Ctx() ctx: Scenes.SceneContext) {
    await ctx.reply('Welcome');
  }

  @On('text')
  public async onMessage(@Ctx() ctx: Scenes.SceneContext) {
    console.log(ctx.message);

    const message = ctx.message as Message.TextMessage;

    await this.teleService.sendQuestion(message.text);

    await ctx.reply('reply: ' + message.text);
  }
}
