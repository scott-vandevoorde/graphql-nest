import { ExecutionContext, Inject, Injectable, Scope } from '@nestjs/common';
import { Loader } from '@tracworx/nestjs-dataloader';
import { ArangoDbService } from 'src/arango-db/arango-db.service';
import { Cat, CreateCatInput } from 'src/graphql.schema';
import * as DataLoader from 'dataloader' 
import { CatsLoader } from './cats.loader';

@Injectable()
export class CatsService {

  constructor(private readonly arangoDbService: ArangoDbService) {
  }

  async create(createCatInput: CreateCatInput): Promise<Cat> {
    const cat = await this.arangoDbService.cats.save(createCatInput, { returnNew: true });
    return cat.new;
  }

  async findAll(keys: readonly string[][], @Loader(CatsLoader) catsLoader: DataLoader<string[], Cat, string[]>) {
    console.log("find all called.")
    const cats = await this.arangoDbService.cats.documents(keys.flat())
    return cats;
  }

  findOne(id: string): Promise<Cat>  {
    return this.arangoDbService.cats.document(id);
  }

}
