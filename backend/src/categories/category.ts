import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Words } from './words';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Words, (words) => words.category)
  words: Words[];
}
