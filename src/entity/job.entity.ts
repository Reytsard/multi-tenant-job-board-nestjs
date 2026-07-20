import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  salaryRangeStart: number;

  @Column()
  salaryRangeEnd: number;

  @Column()
  country: string;

  @Column()
  province: string;

  @Column({ default: true })
  isActive: boolean;
}
