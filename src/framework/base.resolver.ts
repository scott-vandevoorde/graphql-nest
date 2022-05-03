import { ResolveField } from "@nestjs/graphql/dist/decorators";

export abstract class BaseResolver {

    @ResolveField()
    __resolveType(obj) {
      return obj.constructor.name;
    }
  
}
