import { Injectable } from '@nestjs/common';
import { ArangoDbService } from 'src/arango-db/arango-db.service';
import { Cat, CreateCatInput, UpdateCatInput } from 'src/graphql.schema';

@Injectable()
export class CatsService {

  constructor(private readonly arangoDbService: ArangoDbService) {}

  create(createCatInput: CreateCatInput) {
    return this.arangoDbService.cats.save(createCatInput);
  }

  /*findAll() {
    return `This action returns all cats`;
  }*/

  findOne(id: string): Promise<Cat>  {
    return this.arangoDbService.cats.document(id);
  }

  /*update(id: number, updateCatInput: UpdateCatInput) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }*/
}
