import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogData } from './data';
@Injectable()
export class LogService {
  private readonly logger = new Logger(LogService.name);
  constructor(
    @InjectRepository(LogData)
    private readonly repository: Repository<LogData>,
  ) {}
  testGet(str: string = '') {
    return 'test-get: ' + str;
  }
  testPost(str: string = '') {
    this.logger.log(`test-post: ${str}`);
    return 'test-post: ' + str;
  }
}
