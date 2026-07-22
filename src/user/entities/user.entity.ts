import { IsDate, IsEmail, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'job_board_user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @MinLength(8)
  @MaxLength(64)
  username: string;

  @Column()
  @MaxLength(255)
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  middleName: string;

  @Column()
  @IsDate()
  birthdate: Date;

  @Column()
  currentAddress: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @MinLength(8)
  password: string;

  @Column()
  resumeKey: string;
}
