import { useState } from 'react';
import { JOB_IMAGES, jobNames } from './job.constants';
import React from 'react';

export const Job = ({ jobs = [] }: IJobProps) => {
  //   const items = useState([]);

  return (
    <div className="card-job-container">
      {jobs.map((job) => {
        return (
          <div key={job.image} className="card-job">
            <img src={job.image} />
            <span>Lv {job.level}</span>
          </div>
        );
      })}
      {/* {jobNames.map((key) => (
        <div key={key} className="card-job">
          <img src={`/jobs/${JOB_IMAGES[key]}`} />
          <span>Lv 1</span>
        </div>
      ))} */}
    </div>
  );
};
