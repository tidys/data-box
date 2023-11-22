import { Module, DynamicModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogController } from './log/log.controller';
import { LogService } from './log/log.service';
import { LogModule } from './log/log.module';
import { TypeOrmModule } from '@nestjs/typeorm';

let db: DynamicModule;
if (true) {
  db = TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'dpg-ckdqr4kgonuc738of11g-a.oregon-postgres.render.com',
    password: 'G8cLdy0ZpQZitJwrbJ7OtBZkGNRkFWIV',
    port: 5432,
    username: 'user_3ria_user',
    database: 'user_3ria',
    autoLoadEntities: true,
    ssl: true,
    synchronize: true,
  });
} else {
  db = TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '00000000',
    database: 'log',
    autoLoadEntities: true,
    synchronize: true, // 数据库自动同步 entity 文件修改
  });
}

@Module({
  imports: [LogModule, db],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
