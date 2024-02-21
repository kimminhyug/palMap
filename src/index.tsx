import './assets/scss/main.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Test } from 'pages/test';
import { Card } from 'components/card/card';
import { Grid } from 'components/card/grid';
const sampleWater = {
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
const sampleFire = {
  asset: 'Kitsunebi',
  aura: {
    description: 'When activated, equips to the player and transforms into a flamethrower.',
    name: 'huggy_fire',
    tech: "Foxparks's Harness",
  },
  description:
    'It is unskilled at controlling fire from the moment it is born and tends to choke on the flames it breathes unintentionally. Foxparks sneezes are one of the leading causes of forest fires.',
  drops: ['leather', 'flame_organ'],
  genus: 'fourlegged',
  id: 5,
  image: 'pals/005.png',
  imageWiki: 'https://static.wikia.nocookie.net/palworld/images/d/d7/Foxparks_menu.png/',
  key: '005',
  maps: {
    day: '/maps/005-day.png',
    night: '/maps/005-night.png',
  },
  name: 'Foxparks',
  price: 1040,
  rarity: 1,
  size: 'xs',
  skills: [
    {
      cooldown: 2,
      description: 'Hurls a ball of fire straight at an enemy.\n',
      level: 1,
      name: 'ignis_blast',
      power: 30,
      type: 'fire',
    },
    {
      cooldown: 4,
      description: 'Hurls sticky mud at an enemy.\n',
      level: 7,
      name: 'sand_blast',
      power: 40,
      type: 'ground',
    },
    {
      cooldown: 7,
      description:
        'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.\n',
      level: 15,
      name: 'spirit_fire',
      power: 45,
      type: 'fire',
    },
    {
      cooldown: 10,
      description: 'Fires three flaming arrows in succession that home in on an enemy.\n',
      level: 22,
      name: 'flare_arrow',
      power: 55,
      type: 'fire',
    },
    {
      cooldown: 15,
      description: 'Shoots flames at an enemy, dealing continuous damage.\n',
      level: 30,
      name: 'ignis_breath',
      power: 70,
      type: 'fire',
    },
    {
      cooldown: 16,
      description: 'Fires three balls of malice that relentlessly pursue an enemy.\n',
      level: 40,
      name: 'spirit_flame',
      power: 75,
      type: 'dark',
    },
    {
      cooldown: 55,
      description:
        'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.\n',
      level: 50,
      name: 'fire_ball',
      power: 150,
      type: 'fire',
    },
  ],
  stats: {
    attack: {
      melee: 70,
      ranged: 75,
    },
    defense: 70,
    food: 2,
    hp: 65,
    speed: {
      ride: 550,
      run: 400,
      walk: 80,
    },
    stamina: 100,
    support: 100,
  },
  suitability: [
    {
      image: '/jobs/kindling.png',
      level: 1,
      type: 'kindling',
    },
  ],
  types: ['fire'],
  wiki: 'https://palworld.fandom.com/wiki/Foxparks',
};

ReactDOM.render(
  <React.StrictMode>
    {/* <Test /> */}
    <Grid />
    {/* <div
      style={{
        display: 'flex',
        gap: 50,
      }}
    >
      <Card pal={sampleWater} />
      <Card pal={sampleFire} />
    </div> */}
  </React.StrictMode>,
  document.getElementById('root')
);
