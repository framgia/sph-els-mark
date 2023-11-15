import { Answers } from 'src/answer/answers';
import { Category } from 'src/categories/category';
import { User } from 'src/user/user';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('attempts')
export class Attempts {
  @PrimaryGeneratedColumn()
  attempt_id: number;

  @Column({ default: 0 })
  score: number;

  @OneToMany(() => Answers, (answers) => answers.attempts)
  answers: Answers[];

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
