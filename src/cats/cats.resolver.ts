import { Resolver, Query, Mutation, Args, ResolveProperty, ResolveField } from '@nestjs/graphql';
import { Cat, CatResponse, CatResponse_Failure, CatResponse_Success, CreateCatInput } from 'src/graphql.schema';
import { Roles } from 'src/roles.decorator';
import { CatsLoader } from './cats.loader';
import { CatsService } from './cats.service';
import { Loader } from '@tracworx/nestjs-dataloader';
import * as DataLoader from 'dataloader' 
import { BaseResolver } from 'src/framework/base.resolver';

@Resolver('CatResponse')
export class CatsResolver extends BaseResolver {
  constructor(private readonly catsService: CatsService) {
    super();
  }

  @Mutation('createCat')
  async create(@Args('createCatInput') createCatInput: CreateCatInput): Promise<CatResponse> {
    let catResponse: CatResponse;
    try {
      const cat = await this.catsService.create(createCatInput);
      catResponse = new CatResponse_Success();
      catResponse.cat = cat;
    }
    catch (error) {
      catResponse = new CatResponse_Failure();
      catResponse.error = error.message
    }
    return catResponse; 
  }

  @Query('cats')
  async findAll(@Args('_id') id: ArrayLike<string[]>, @Loader(CatsLoader) catsLoader: DataLoader<string[], Cat, string[]>) {
    return catsLoader.loadMany(id);
  }

  @Query('cat')
  @Roles('admin')
  findOne(@Args('_id') id: string):Promise<Cat> {
    return this.catsService.findOne(id);
  }

}
