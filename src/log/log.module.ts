import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogData } from './data';
import { LogService } from './log.service';
import { LogController } from './log.controller';
@Module({
  imports: [TypeOrmModule.forFeature([LogData])],
  providers: [LogService, LogData],
  controllers: [LogController],
})
export class LogModule {}
