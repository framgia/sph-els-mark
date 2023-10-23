import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { User } from 'src/user/user';

enum Status {
  pending = 'pending',
  accepted = 'accepted',
}
@Entity()
export class Followers {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user: User) => user.followers)
  @JoinColumn({ name: 'followers_id' })
  followers: User[];

  @ManyToOne(() => User, (user: User) => user.following)
  @JoinColumn({ name: 'following_id' })
  following: User[];

  @Column({ enum: Status, type: 'enum', default: Status.pending })
  status: Status;
}
