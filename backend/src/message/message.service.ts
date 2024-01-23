import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'entities/Message';
import { Repository, Not } from 'typeorm';
@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private msgRepository: Repository<Message>,
  ) { }
 
  //Get User Messages
 

}
