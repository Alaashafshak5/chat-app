import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')

export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get-all')
  async getUserChats() {
    let response: any;
    try {
      response = await this.userService.getUsers();
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

  @Get('get/:id')
  async getUserDetails(@Param('id') id: number) {
    let response: any;
    try {
      response = await this.userService.getUserDetails(id);
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
