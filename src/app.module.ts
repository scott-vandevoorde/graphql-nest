import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CatsModule } from './cats/cats.module';
import { ArangoDbModule } from './arango-db/arango-db.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ArangoDbConfig } from './arango-db/arango-db.config.interface';
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
        customScalarTypeMapping: {
          age_Int_NotNull_min_0_max_20: 'number'
        }
      },
      transformSchema: constraintDirective(),
    }),
    CatsModule,
    ArangoDbModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ArangoDbModule.forRootAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService, ],
      useFactory: (configService: ConfigService) : ArangoDbConfig => ({
        url: configService.get('ARANGO_DB_URL'),
        username: configService.get('ARANGO_DB_USERNAME'),
        password: configService.get('ARANGO_DB_PASSWORD'),
        database: configService.get('ARANGO_DB_DATABASE'),
      })
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
