import { Test, TestingModule } from '@nestjs/testing';
import { LearnixBatchController } from './learnix-batch.controller';
import { LearnixBatchService } from './learnix-batch.service';

describe('LearnixBatchController', () => {
  let learnixBatchController: LearnixBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LearnixBatchController],
      providers: [LearnixBatchService],
    }).compile();

    learnixBatchController = app.get<LearnixBatchController>(LearnixBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(learnixBatchController.getHello()).toBe('Hello World!');
    });
  });
});
