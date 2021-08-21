import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mongodbatlas:mongodbatlas@cluster.a4gnz.mongodb.net/backend-nestjs',
    ),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

// eslint-disable-next-line prettier/prettier
export class AppModule { }
