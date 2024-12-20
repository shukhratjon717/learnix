import { Module } from '@nestjs/common';
import { LearnixBatchController } from './learnix-batch.controller';
import { LearnixBatchService } from './learnix-batch.service';

@Module({
  imports: [],
  controllers: [LearnixBatchController],
  providers: [LearnixBatchService],
})
export class LearnixBatchModule {}
