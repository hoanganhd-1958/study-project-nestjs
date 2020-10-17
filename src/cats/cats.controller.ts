import { Controller, Get } from '@nestjs/common';
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
}
