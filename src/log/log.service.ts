import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { LogData } from './data';
import { noop } from 'rxjs';
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
  async addLog(str: string): Promise<LogData> {
    const result = this.repository.create({ name: str });
    await this.repository.save(result);
    return result;
  }
  async getLog(id: number) {
    this.logger.log(`get log by id: ${id}`);
    const result = await this.repository.find({ where: { id: id } });
    return result ?? 'not found';
  }
  async getAllLogs() {
    return await this.repository.find();
  }
}
