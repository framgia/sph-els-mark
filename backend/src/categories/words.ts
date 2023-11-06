import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category';
import { Choices } from './choices';

@Entity('words')
export class Words {
  @PrimaryGeneratedColumn()
  word_id: number;

  @Column({ default: 1 })
  category_id: number;

  @Column({ nullable: true })
  given_word: string;

  @OneToMany(() => Choices, (choices: Choices) => choices.word, {
    cascade: true,
  })
  choices: Choices[];

  @Column({ nullable: true })
  correct_word: string;

  @ManyToOne(() => Category, (category) => category.words)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
