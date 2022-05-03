import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
import { CatsLoader } from './cats.loader';
import { DataloaderModule } from '@tracworx/nestjs-dataloader';

@Module({
  imports: [DataloaderModule],
  providers: [CatsResolver, CatsService, CatsLoader]
})
export class CatsModule {}
