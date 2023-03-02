import { Ctx, Hears, On, Start, Update } from 'nestjs-telegraf';
import { Scenes } from 'telegraf';
import { Message } from 'telegraf/typings/core/types/typegram';
import { Prisma } from '@prisma/client';

import { TeleService } from './tele.service';
import { PrismaService } from '../prisma/prisma.service';

@Update()
export class TeleUpdate {
  constructor(
    private readonly teleService: TeleService,
    private readonly prisma: PrismaService,
  ) {}

  @Start()
  public async start(@Ctx() ctx: Scenes.SceneContext) {
    await ctx.reply('Welcome');
  }

  @Hears('@hi')
  public async onHears(@Ctx() ctx: Scenes.SceneContext) {
    // const message = ctx.message as Message.TextMessage;

    // await ctx.sendChatAction('typing');

    // const data = await this.prisma.user.findFirst({
    //   where: {
    //     firstName: 'Hoang Nhat',
    //   },
    // });
    // await ctx.reply(data.firstName);

    // console.log('Search');
    await ctx.reply('Hello Nhat Pham');
  }
  @On('text')
  public async onMessage(@Ctx() ctx: Scenes.SceneContext) {
    const message = ctx.message as Message.TextMessage;

    await ctx.sendChatAction('typing');

    const newConversation = await this.prisma.user.create({
      data: {
        userId: message.from.id,
        firstName: message.from.first_name,
        lastName: message.from.last_name,
        email: message.text,
        userName: message.from.username,
      },
    });

    try {
      const answer = await this.teleService.sendQuestion(message.text);

      await ctx.reply(answer);
    } catch (error) {
      console.log(error);
    }
  }
}
