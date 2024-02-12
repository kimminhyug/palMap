interface IJob {
  type: string;
  image: string;
  level: number;
}
interface IJobProps {
  jobs?: IJob[];
  //   jobName?: string;
  //   jobList?: string[];
  //   jobImage?: string;
  //   jobImages?: { [key: string]: string };
}
