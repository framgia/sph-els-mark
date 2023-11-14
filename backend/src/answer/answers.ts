import { IsNotEmpty } from 'class-validator';
import { Words } from 'src/categories/words';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('answers')
export class Answers {
  @PrimaryGeneratedColumn()
  answer_id: number;

  @ManyToOne(() => Words, { cascade: true })
  @JoinColumn({ name: 'word_id' })
  words: Words;

  @Column()
  @IsNotEmpty()
  answer: string;

  @Column()
  @IsNotEmpty()
  question_no: number;
}
