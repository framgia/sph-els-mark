import { Exclude } from 'class-transformer';
import { Followers } from 'src/followers/follow';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Attempts } from 'src/attempts/attempts';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ default: true })
  is_admin: boolean;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ default: false })
  avatar: string;

  @OneToMany(() => Followers, (user: Followers) => user.followers)
  followers: Followers[];

  @OneToMany(() => Followers, (user: Followers) => user.followers)
  following: Followers[];

  @OneToMany(() => Attempts, (attempts: Attempts) => attempts.user)
  attempts: Attempts[];
}
