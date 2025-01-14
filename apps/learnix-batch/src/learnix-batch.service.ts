import { Injectable } from '@nestjs/common';

@Injectable()
export class LearnixBatchService {
	getHello(): string {
		return 'Welcome to LearniX Batch server!';
	}
}
