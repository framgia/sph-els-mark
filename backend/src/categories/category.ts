import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Words } from './words';
import { Attempts } from '../attempts/attempts';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Words, (words) => words.category, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  words: Words[];

  @OneToMany(() => Attempts, (attempts: Attempts) => attempts.category)
  attempts: Attempts[];
}
