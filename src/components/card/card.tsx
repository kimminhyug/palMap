import React, { useState } from 'react';
import { Job } from './job/job';
import { IPalInfo } from 'components/pals/pal.types';

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
const ELEMENTAL: { [key: string]: string } = {
  WATER: '#7bd3ea',
  FIRE: '#ff4545',
  DARK: 'rgb(156, 16, 74)',
  GROUND: 'rgb(143, 85, 35)',
  ICE: 'rgb(24, 176, 192)',
  NEUTRAL: 'rgb(181, 148, 140)',
  ELECTRIC: 'rgb(206, 165, 0)',
  GRASS: 'rgb(56, 240, 79)',
  DRAGON: 'YELLOW',
};

export const Card = ({ pal }: { pal: IPalInfo }): React.ReactElement => {
  const [flipStatus, setFlipStatus] = useState(false);

  const toggleFlip = () => {
    // console.log(flipStatus);
    // setFlipStatus((prev) => !prev);
  };
  const elementalLength = pal.types.length;
  const boxShadowCSS = pal.types
    .map((type, idx) => {
      if (!ELEMENTAL[type.toUpperCase()]) console.log([type.toUpperCase()]);
      return `${(30 / elementalLength) * (idx + 1)}px ${30 / elementalLength}px ${5 / elementalLength}px ${1}px ${
        ELEMENTAL[type.toUpperCase()]
      }`;
    })
    .join();

  return (
    <>
      <div
        className={`card ${pal.types[0]}`}
        onClick={toggleFlip}
        style={{
          boxShadow: boxShadowCSS,
        }}
      >
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
          {/* <div className={`info ${flipStatus ? 'show': ''}`}>
            <div className="card-b">i am back</div>
          </div> */}
        </div>
      </div>
    </>
  );
};
