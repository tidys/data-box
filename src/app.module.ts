import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogController } from './log/log.controller';
import { LogService } from './log/log.service';
import { LogModule } from './log/log.module';

@Module({
  imports: [LogModule],
  controllers: [AppController, LogController],
  providers: [AppService, LogService],
})
export class AppModule {}
