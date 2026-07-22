import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobController } from './job/job.controller';
import { JobService } from './job/job.service';
import { JobModule } from './job/job.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entity/job.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: new ConfigService().get('jwtSecret'),
      signOptions: { expiresIn: '60m' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'job_board',
      username: 'test',
      password: 'TEST123',
      entities: [User, Job],
      synchronize: true, //remove in prod
    }),
    JobModule,
    UserModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
