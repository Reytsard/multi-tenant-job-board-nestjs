import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'job_board_user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  middleName: string;

  @Column()
  birthdate: Date;

  @Column()
  currentAddress: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  resumeKey: string;
}
