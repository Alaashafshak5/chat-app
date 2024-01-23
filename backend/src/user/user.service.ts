import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entities/User';
import { Repository, Not } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //Get All the Users
  async getUsers() {
    return await this.userRepository.find({
      where: { id: Not(1) },
      relations: { messages: true },
    });
  }
}
