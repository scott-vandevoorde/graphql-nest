import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ArangoDbConfig } from './arango-db.config.interface';
import { ARANGO_DB_CONFIG, ARANGO_DB_DRIVER } from './arango-db.constants';
import { ArangoDbService } from './arango-db.service';
import { createDriver } from './arango-db.util';

@Module({})
export class ArangoDbModule {


  static forRootAsync(configProvider): DynamicModule {
    return {
        module: ArangoDbModule,
        global: true,
        imports: [ ConfigModule ],
        providers: [
            {
                provide: ARANGO_DB_CONFIG,
                ...configProvider
            } as Provider<any>,
            {
                provide: ARANGO_DB_DRIVER,
                inject: [ ARANGO_DB_CONFIG ],
                useFactory: async (config: ArangoDbConfig) => createDriver(config),
            },
            ArangoDbService,
        ],
        exports: [
            ArangoDbService,
        ]
    }
  }
}
