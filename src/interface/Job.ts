export interface IJob {
  createDate: Date
  dateFinished: Date
  description: string
  id: string
  status: enStatus
  title: string;
  updateDate: Date
}

export enum enStatus {
  OPEN_ENDED = 0,
  IN_PROGRESS = 1,
  FINISHED = 2,
  CANCELLED = 3
}


/*
0 - openEnded
1 -

*/