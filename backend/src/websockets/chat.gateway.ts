// src/websockets/chat.gateway.ts

import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  handleMessage(client: any, payload: any): void {
    this.server.emit('message', payload);
  }
}
