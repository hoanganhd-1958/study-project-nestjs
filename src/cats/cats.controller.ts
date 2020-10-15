import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  
  @Get()
  show(): string {
    return this.catsService.show()
  }

  @Get('profile')
  profile(): string {
    return 'sub-prefix'
  }
}
