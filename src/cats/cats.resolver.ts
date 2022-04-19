import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Cat, CreateCatInput } from 'src/graphql.schema';
import { CatsService } from './cats.service';

@Resolver('Cat')
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Mutation('createCat')
  create(@Args('createCatInput') createCatInput: CreateCatInput) {
    return this.catsService.create(createCatInput);
  }

  /*@Query('cats')
  findAll() {
    return this.catsService.findAll();
  }*/

  @Query('cat')
  findOne(@Args('id') id: string):Promise<Cat> {
    return this.catsService.findOne(id);
  }
/*
  @Mutation('updateCat')
  update(@Args('updateCatInput') updateCatInput: UpdateCatInput) {
    return this.catsService.update(updateCatInput.id, updateCatInput);
  }

  @Mutation('removeCat')
  remove(@Args('id') id: number) {
    return this.catsService.remove(id);
  }*/
}
