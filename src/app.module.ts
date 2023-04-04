import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'aws.connect.psdb.cloud',
      port: 3306,
      username: '***',
      password: '***',
      database: '***',
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: true
      }
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
