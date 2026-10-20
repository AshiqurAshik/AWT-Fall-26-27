import {



  BadRequestException,
} from "@nestjs/common";
import {
  makeFindOneOption,
  makeFindOption,
} from "@/common/helpers/requestParser";

@Injectable()
export class QueryParserPipe  {
  constructor(
      findType,
      searchFields = [],
  ) {;this.findType = findType;this.searchFields = searchFields;}
  transform(value, metadata) {
    const { type } = metadata;
    // Make sure to only run your logic on queries
    if (type === "query") return this.transformQuery(value);
    return value;
  }

  transformQuery(query) {
    if (typeof query !== "object" || !query) return query;

    try {
      if (this.findType == "MANY") {
        query = makeFindOption(query, this.searchFields);
      } else {
        query = makeFindOneOption(query);
      }
    } catch (err) {
      throw new BadRequestException("Bad Query String");
    }

    return query;
  }
}
