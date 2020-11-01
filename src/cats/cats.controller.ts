import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  
  @Get()
  async show(): Promise<Cat[]> {
    return this.catsService.show()
  }

  @Get('profile')
  profile(): string {
    return 'sub-prefix'
  }

  @Get('test-exception')
  async findAll() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      message: 'This is a custom error message'
    }, HttpStatus.FORBIDDEN);
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
    id: number,
  ) {
    return id
  }

  @Get('uuid/:uuid')
  async findUUId(
    @Param('uuid', new ParseUUIDPipe())
    uuid: string
  ) {
    return uuid
  }
}
