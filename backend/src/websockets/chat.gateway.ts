// src/websockets/chat.gateway.ts

import { InjectRepository } from '@nestjs/typeorm';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Message } from 'entities/Message';
import { Server } from 'socket.io';
import { Repository } from 'typeorm';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  maxHttpBufferSize: 1e8, // 100 MB
})
export class ChatGateway {
  constructor(
    @InjectRepository(Message)
    private msgRepository: Repository<Message>,
  ) {}

  @WebSocketServer()
  server: Server;
  @SubscribeMessage('sendMessage')
  async handleMessage(client: any, payload: any) {
    console.log(payload);
    let res = this.msgRepository.create(payload);
    res = await this.msgRepository.save(payload);
    if (res) this.server.emit('message', payload);
  }
}
