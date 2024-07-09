import { Injectable, Logger } from '@nestjs/common';
import algoliasearch, { SearchIndex } from 'algoliasearch';

@Injectable()
export class AlgoliaService {
  private readonly logger = new Logger(AlgoliaService.name);
  private client = algoliasearch('4EXV0UGBTJ', '6d454e9e801a823bb1c4caf757ca8088');
  private index: SearchIndex = this.client.initIndex('users');

  async onModuleInit() {
    await this.setSearchableAttributes();
  }

  private async setSearchableAttributes() {
    this.logger.log('Setting searchable attributes for the Algolia index');
    await this.index.setSettings({
      searchableAttributes: ['name', 'address'],
    }).then(() => {
      this.logger.log('Searchable attributes set successfully');
    }).catch(error => {
      this.logger.error('Error setting searchable attributes', error.message);
    });
  }



  async addOrUpdateRecord(user: { id: number; name: string; address: string }) {
    this.logger.log(`Adding/updating user: ${JSON.stringify(user)}`);
    await this.index.saveObject({
      objectID: user.id.toString(),
      name: user.name,
      address: user.address
    });
  }

  async deleteRecord(userId: number) {
    this.logger.log(`Deleting user with ID: ${userId}`);
    await this.index.deleteObject(userId.toString());
  }

 

  async getRecordById(objectID: string) {
    this.logger.log(`Getting record by ID: ${objectID}`);
    if (!objectID) {
      this.logger.error('Invalid objectID provided');
      throw new Error('Invalid objectID provided');
    }
    try {
      const record = await this.index.getObject(objectID);
      this.logger.log(`Record: ${JSON.stringify(record)}`);
      return record;
    } catch (error) {
      this.logger.error(`Error getting record by ID: ${objectID}`, error.message);
      throw new Error(`Record retrieval failed: ${error.message}`);
    }
  }
  

  async getAllRecords() {
    this.logger.log(`Getting all records`);
    try {
      const result = await this.index.search('');
      this.logger.log(`All records: ${JSON.stringify(result.hits)}`);
      return result.hits;
    } catch (error) {
      this.logger.error(`Error getting all records`, error.message);
      throw new Error(`Retrieval of all records failed: ${error.message}`);
    }
  }

  async searchUsers(query: string) {
    this.logger.log(`Searching users with query: ${query}`);
    try {
      const result = await this.index.search(query);
      this.logger.log(`Search results: ${JSON.stringify(result.hits)}`);
      return result.hits;
    } catch (error) {
      this.logger.error(`Error searching users with query: ${query}`, error.message);
      throw new Error(`User search failed: ${error.message}`);
    }
  }
}
