import React from 'react';
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
const sampleItem = {
  id: 10,
  key: '010',
  image: '/pals//010.png',
  name: 'Pengullet',
  wiki: 'https://palworld.fandom.com/wiki/Pengullet',
  types: ['water', 'ice'],
  imageWiki: 'https://static.wikia.nocookie.net/palworld/images/3/38/Pengullet_menu.png/',
  suitability: [
    {
      type: 'handiwork',
      image: 'jobs/handiwork.png',
      level: 1,
    },
    {
      type: 'transporting',
      image: 'jobs/transporting.png',
      level: 1,
    },
    {
      type: 'watering',
      image: 'jobs/watering.png',
      level: 1,
    },
    {
      type: 'cooling',
      image: 'jobs/cooling.png',
      level: 1,
    },
  ],
  drops: ['ice_organ', 'pal_fluids'],
  aura: {
    name: 'pengullet_cannon',
    description:
      'When activated, the player equips a Rocket Launcher and fires Pengullet as ammunition. Pengullet explodes on contact and is incapacitated.',
    tech: "Pengullet's Rocket Launcher",
  },
  description:
    // 'The feathers of this Pal have all but disappeared, but sadly, its desire to fly has remained as strong as ever. Even now, it tries to fly again in any way it can.',
    '날개가 완전히 퇴화해 날 수 없다. 대신 유전자에 새겨진 하늘을 향한 미련이 있어 어떻게든 다시 날아오르려고 한다.',
  skills: [
    {
      level: 1,
      name: 'ice_missile',
      type: 'ice',
      cooldown: 3,
      power: 30,
      description: 'Creates ice lances in the air that fly towards enemies.\n',
    },
    {
      level: 7,
      name: 'hydro_jet',
      type: 'water',
      cooldown: 2,
      power: 30,
      description: 'Hurls a high speed ball of water at an enemy.\n',
    },
    {
      level: 15,
      name: 'aqua_gun',
      type: 'water',
      cooldown: 4,
      power: 40,
      description: 'Hurls a ball of water straight at an enemy.\n',
    },
    {
      level: 22,
      name: 'icicle_cutter',
      type: 'ice',
      cooldown: 10,
      power: 55,
      description: 'Creates a crescent blade of ice and hurls it forward.\n',
    },
    {
      level: 30,
      name: 'iceberg',
      type: 'ice',
      cooldown: 15,
      power: 70,
      description: 'Summons a sharp ice lance under an enemy.\n',
    },
    {
      level: 40,
      name: 'blizzard_spike',
      type: 'ice',
      cooldown: 45,
      power: 130,
      description:
        'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.\n',
    },
    {
      level: 50,
      name: 'hydro_laser',
      type: 'water',
      cooldown: 55,
      power: 150,
      description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.\n',
    },
  ],
  stats: {
    hp: 70,
    attack: {
      melee: 70,
      ranged: 75,
    },
    defense: 70,
    speed: {
      ride: 650,
      run: 500,
      walk: 60,
    },
    stamina: 100,
    support: 100,
    food: 2,
  },
  asset: 'Penguin',
  genus: 'humanoid',
  rarity: 1,
  price: 1080,
  size: 'xs',
  maps: {
    day: '/public/images/maps/010-day.png',
    night: '/public/images/maps/010-night.png',
  },
};
export const Card = ({ item = sampleItem }): React.ReactElement => {
  return (
    <>
      <div className="card-container">
        <div className="card-header d-f">
          <div className="card-element">
            <img src={'/elemental/water.png'}></img>
          </div>
          <div className="card-name">{item.name}</div>
        </div>
        <div className="card-character">
          <img src={item.image}></img>
        </div>
        <div className="card-contents">
          <Job jobs={item.suitability} />

          <div className="card-description">{item.description}</div>
        </div>
      </div>
    </>
  );
};
