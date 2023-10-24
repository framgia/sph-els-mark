import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category';

@Entity('words')
export class Words {
  @PrimaryGeneratedColumn()
  word_id: number;

  @Column({ nullable: false })
  category_id: number;

  @Column({ nullable: false })
  given_word: string;

  @Column({ nullable: false })
  choices: string;

  @Column({ default: false })
  correct_word: boolean;

  @ManyToOne(() => Category, (category) => category.words)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
