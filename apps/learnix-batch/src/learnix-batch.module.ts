import { Module } from '@nestjs/common';
import { LearnixBatchController } from './learnix-batch.controller';
import { LearnixBatchService } from './learnix-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ConfigModule.forRoot()],
	controllers: [LearnixBatchController],
	providers: [LearnixBatchService],
})
export class LearnixBatchModule {}
