import { Module } from '@nestjs/common';
import { AlgoliaService } from './algolia.service';
import { AlgoliaController } from './algolia.controller';

@Module({
  controllers: [AlgoliaController],
  providers: [AlgoliaService],
  exports: [AlgoliaService],

})
export class AlgoliaModule {}
