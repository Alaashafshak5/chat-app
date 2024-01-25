import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'entities/Message';
import { User } from 'entities/User';
import { join } from 'path';
import { Repository, Not } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Message)
    private msgRepository: Repository<Message>,
  ) {}

  //Get All users
  async getAll() {
    return await this.userRepository.find();
  }

  //Get user contacts
  async getUsersContacts(currentUserId: number) {
    return await this.userRepository.find({
      where: { id: Not(currentUserId) },
      relations: { messages: true },
    });
  }

  //Get user details
  async getUserDetails(currentUserId: number, id: number) {
    console.log(currentUserId)
    let user = await this.userRepository.findOne({
      where: { id: id },
    });

    let messages = await this.msgRepository.find({
      where: [
        { senderId: currentUserId, receiverId: id },
        { senderId: id, receiverId: currentUserId },
      ],
      order: {
        time: 'ASC', // or 'DESC' based on your requirement
      },
    });

    return {user, messages}
  }
}
