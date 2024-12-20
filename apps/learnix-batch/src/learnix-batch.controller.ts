import { Controller, Get } from '@nestjs/common';
import { LearnixBatchService } from './learnix-batch.service';

@Controller()
export class LearnixBatchController {
  constructor(private readonly learnixBatchService: LearnixBatchService) {}

  @Get()
  getHello(): string {
    return this.learnixBatchService.getHello();
  }
}
