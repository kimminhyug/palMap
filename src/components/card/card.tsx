import React, { useState } from 'react';
import { Job } from './job/job';

const JobNames = [
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
const imageSize = 48;
export const Card = ({ pal }: { pal: IPalInfo }): React.ReactElement => {
  const [flipStatus, setFlipStatus] = useState(false);
  const toggleFlip = () => {
    console.log(flipStatus);
    setFlipStatus((prev) => !prev);
  };
  return (
    <>
      <div className={`card ${pal.types[0]}`} onClick={toggleFlip}>
        <div className={`card-container  ${flipStatus ? 'disable' : ''}`}>
          <div className="card-header d-f">
            <div className="card-element">
              {pal.types.map((type, index) => {
                return (
                  <>
                    {/* css 테스트 */}
                    <img
                      key={type}
                      src={`/elemental/${type}.png`}
                      style={{ position: 'absolute', left: imageSize / index / 2 }}
                    />
                  </>
                );
              })}
            </div>
            <div className="card-name">{pal.name}</div>
          </div>
          {/* front */}
          <div className="show">
            <div className="card-character">
              <img src={pal.image} />
            </div>
            <div className="card-contents">
              <Job jobs={pal.suitability} />

              <div className="card-description">{pal.description}</div>
            </div>
          </div>
          {/* back */}
          <div className={`info ${flipStatus ? 'show' : ''}`}>
            <div className="card-b">i am back</div>
          </div>
        </div>
      </div>
    </>
  );
};
