import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';

@Module({
  imports: [],
  providers: [CatsResolver, CatsService]
})
export class CatsModule {}
