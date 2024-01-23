import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly msgService: MessageService) {}

  @Get('get-all')
  async getUserChats() {
    // let response: any;
    // try {
    //   response = await this.userService.getUsers();
    // } catch (err) {
    //   throw new HttpException(
    //     {
    //       statusCode: HttpStatus.BAD_REQUEST,
    //       message: err.message,
    //     },
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'success',
    //   data: response,
    // };
  }
}
