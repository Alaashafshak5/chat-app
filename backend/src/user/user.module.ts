import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'entities/Message';
import { User } from 'entities/User';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Message])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
