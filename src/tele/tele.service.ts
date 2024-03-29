import { Injectable } from '@nestjs/common';
import type { ChatGPTAPI } from 'chatgpt';

export const importDynamic = new Function(
  'modulePath',
  'return import(modulePath)',
);

@Injectable()
export class TeleService {
  private api?: ChatGPTAPI;

  constructor() {
    (async () => {
      const { ChatGPTAPI } = await importDynamic('chatgpt');

      this.api = new ChatGPTAPI({
        apiKey: process.env.CHATGPT_APIKEY,
      });
    })();
  }

  public async sendQuestion(question: string): Promise<string> {
    if (this.api === undefined) {
      return;
    }

    const { text: answer, conversationId } = await this.api.sendMessage(
      question,
      {
        onProgress: ({ text }) => {
          console.log(text);
        },
      },
    );

    return answer;
  }
}
