import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LogService {
  private readonly logger = new Logger(LogService.name);

  testGet(str: string = '') {
    return 'test-get: ' + str;
  }
  testPost(str: string = '') {
    this.logger.log(`test-post: ${str}`);
    return 'test-post: ' + str;
  }
}
