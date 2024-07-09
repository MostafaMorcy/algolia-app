import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlgoliaModule } from 'src/algolia/algolia.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService,PrismaModule,PrismaService],
  imports: [PrismaModule,AlgoliaModule]

})
export class UsersModule {}
