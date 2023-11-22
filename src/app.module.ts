import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogController } from './log/log.controller';
import { LogService } from './log/log.service';
import { LogModule } from './log/log.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LogModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '00000000',
      database: 'log',
      autoLoadEntities: true,
      synchronize: true, // 数据库自动同步 entity 文件修改
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
