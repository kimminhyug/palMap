import React from 'react';

const Job = [
  'COOLING',
  'FARMING',
  'GATHERING',
  'GENERATING_ELECTRICITY',
  'HANDIWORK',
  'KINDLING',
  'LUMBERING',
  'MEDICINE_PRODUCTION',
  'MINING',
  'PLANTING',
  'TRANSPORTING',
  'WATERING',
] as const;
const JOB_IMAGES = {
  COOLING: 'cooling.png',
  FARMING: 'farming.png',
  GATHERING: 'gathering.png',
  GENERATING_ELECTRICITY: 'generating_electricity.png',
  HANDIWORK: 'handiwork.png',
  KINDLING: 'kindling.png',
  LUMBERING: 'lumbering.png',
  MEDICINE_PRODUCTION: 'medicine_production.png',
  MINING: 'mining.png',
  PLANTING: 'planting.png',
  TRANSPORTING: 'transporting.png',
  WATERING: 'watering.pnG',
};

export const Card = (): React.ReactElement => {
  return (
    <>
      <div className="card-container">
        <div className="card-header d-f">
          <div className="card-element">
            <img src={'/elemental/water.png'}></img>
          </div>
          <div className="card-name">펭글린</div>
        </div>
        <div className="card-character">
          <img src={'/pals/010.png'}></img>
        </div>
        <div className="card-contents">
          <div className="card-job-container">
            {Job.map((key) => (
              <div key={key} className="card-job">
                <img src={`/jobs/${JOB_IMAGES[key]}`}></img>
              </div>
            ))}
          </div>
          <div className="card-description"></div>
        </div>
      </div>
    </>
  );
};
