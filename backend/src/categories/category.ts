import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
