import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Attempts } from 'src/attempts/attempts';
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
  id: number;

  @ManyToOne(() => Attempts)
  @JoinColumn({ name: 'attempt_id' })
  attempts: Attempts;

  @ManyToOne(() => Words)
  @JoinColumn({ name: 'word_id' })
  words: Words;

  @Column({ default: 'no answer' })
  @IsNotEmpty()
  answer: string;

  @Column({ nullable: false })
  @IsNotEmpty()
  question_no: number;
}
