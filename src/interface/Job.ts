import { IAddress } from './Address';
import { IFreelancer } from './People';
import { IVacancy } from './Vacancy';

export interface IJob {
  createDate: Date;
  dateFinished: Date;
  description: string;
  id: string;
  status: enStatus;
  title: string;
  updateDate: Date;
  freelancers: IFreelancer[];
  vacancies: IVacancy[];
  address?: IAddress;
}

export enum enStatus {
  OPEN_ENDED = 0,
  IN_PROGRESS = 1,
  FINISHED = 2,
  CANCELLED = 3,
}
