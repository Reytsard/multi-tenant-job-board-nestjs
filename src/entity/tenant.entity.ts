import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Job } from './job.entity';

export class Tenant {
  @PrimaryGeneratedColumn()
  tenantId: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  jobListing: Job[];

  @Column()
  isVerified: boolean;
}
