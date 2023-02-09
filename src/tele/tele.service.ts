import { Injectable } from '@nestjs/common';
import type { ChatGPTAPI } from 'chatgpt';

@Injectable()
export class TeleService {
  private api?: ChatGPTAPI;

  constructor() {
    (async () => {
      const { ChatGPTAPI } = await import('chatgpt');

      this.api = new ChatGPTAPI({
        apiKey: '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',
      });
    })();
  }

  public async sendQuestion(question: string): Promise<void> {
    if (this.api === undefined) {
      return;
    }

    const { text: answer } = await this.api.sendMessage(question);
    console.log(answer);
  }
}
