import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/shared-service';
import { Answers } from './answers';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerService extends SharedService {
  constructor(
    @InjectRepository(Answers)
    private readonly answersRepository: Repository<Answers>
  ) {
    super(answersRepository);
  }
  async deleteByWordId(wordId: number): Promise<void> {
    // Find answers where words.word_id matches the provided wordId
    const answersToDelete = await this.answersRepository.find({
      where: { words: { word_id: wordId } },
    });

    // Delete the found answers
    await this.answersRepository.remove(answersToDelete);
  }
}
