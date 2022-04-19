import { Test, TestingModule } from '@nestjs/testing';
import { ArangoDbService } from './arango-db.service';

describe('ArangoDbService', () => {
  let service: ArangoDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArangoDbService],
    }).compile();

    service = module.get<ArangoDbService>(ArangoDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
