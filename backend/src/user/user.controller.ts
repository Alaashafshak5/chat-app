import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get-all')
  async getAll() {
    let response: any;
    try {
      response = await this.userService.getAll();
    } catch (err) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'success',
      data: response,
    };
  }

  @Get('get-user-contacts/:currentUserId')
  async getUserChats(@Param('currentUserId') currentUserId: number) {
    let response: any;
    try {
      response = await this.userService.getUsersContacts(currentUserId);
    } catch (err) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'success',
      data: response,
    };
  }

  @Get('get/:currentUserId/:id')
  async getUserDetails(
    @Param('currentUserId') currentUserId: number,
    @Param('id') id: number,
  ) {
    let response: any;
    try {
      response = await this.userService.getUserDetails(currentUserId, id);
    } catch (err) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: err.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: 'success',
      data: response,
    };
  }
}
