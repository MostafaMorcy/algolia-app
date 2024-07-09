import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlgoliaModule } from './algolia/algolia.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AlgoliaModule, UsersModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
