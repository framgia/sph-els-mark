import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Words } from './words';

@Entity('choices')
export class Choices {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  options: string;

  @ManyToOne(() => Words, (words) => words.choices, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'word_id' })
  word: Words;
}
