import {
  Body,
  Controller,
  Get,
  Logger,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { LogService } from './log.service';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { User } from './decorators';

class StructObject {
  @IsNotEmpty()
  @IsString()
  name: string;
  user: string;
}

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}
  @Get('get-test')
  testGet(@Query('name', ParseIntPipe) name: string) {
    return this.logService.testGet(name);
  }
  @Post('post-test')
  testPost(@Body() obj: StructObject) {
    return this.logService.testPost(obj.name.toString());
  }
  @Post('post-test-user')
  testPostUser(@User() user: string) {
    return user;
  }
}
