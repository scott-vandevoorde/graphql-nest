import { Inject, Injectable } from '@nestjs/common';
import { Database } from 'arangojs';
import { Cat, CreateCatInput } from 'src/graphql.schema';
import { ARANGO_DB_DRIVER } from './arango-db.constants';
import { DocumentCollection } from './arango-db.overrides.interface';

@Injectable()
export class ArangoDbService {

    cats: DocumentCollection<CreateCatInput, Cat>;

    constructor(
        @Inject(ARANGO_DB_DRIVER) private readonly db: Database
    ) {
        this.cats = this.db.collection("cats");
    }
}
