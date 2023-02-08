import { Injectable } from '@nestjs/common';
import { ChatGPTAPI } from 'chatgpt';
//const ChatGPTAPI = require('chatgpt');

@Injectable()
export class TeleService {
  public async sendAnswer(text: string): Promise<void> {
    const api = new ChatGPTAPI({
      apiKey: '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',
    });
    console.log(text);
  }
}
