import { Controller, Get, Post } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('/')
  public getJobs() {
    return this.jobService.getJobs();
  }
}
