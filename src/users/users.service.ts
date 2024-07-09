import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlgoliaService } from 'src/algolia/algolia.service';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    private prisma: PrismaService,
    private algoliaService: AlgoliaService
  ) {}

  async createUser(data: { name: string; address: string }) {
    this.logger.log(`Creating user with data: ${JSON.stringify(data)}`);
    const user = await this.prisma.user.create({
      data,
    });
    await this.algoliaService.addOrUpdateRecord(user);
    return user;
  }

  async updateUser(id: number, data: { name?: string; address?: string }) {
    this.logger.log(`Updating user with ID: ${id}, data: ${JSON.stringify(data)}`);
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });
    await this.algoliaService.addOrUpdateRecord(user);
    return user;
  }

  async getUserById(id: number) {
    const objectID = id.toString();
    this.logger.log(`Retrieving user by ID: ${objectID}`);
    return this.algoliaService.getRecordById(objectID);
  }

  async getAllUsers() {
    this.logger.log(`Retrieving all users`);
    return this.algoliaService.getAllRecords();
  }

  async searchUsers(query: string) {
    this.logger.log(`Searching users with query: ${query}`);
    return this.algoliaService.searchUsers(query);
  }

}
