import * as DataLoader from 'dataloader'
import { DataloaderProvider } from '@tracworx/nestjs-dataloader';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Cat } from 'src/graphql.schema';
import { ArangoDbService } from 'src/arango-db/arango-db.service';

@DataloaderProvider()
export class CatsLoader {
    constructor(private readonly arangoDbService: ArangoDbService) {}
    createDataloader(ctx: GqlExecutionContext): DataLoader<string[], Cat, string[]> {
    return new DataLoader<string[], Cat>(async (ids) => await this.arangoDbService.cats.documents(ids.flat()));
  }
}