import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  show(): string {
    return 'All of my cats'
  }
}
