import { useGetWindowSize } from 'hooks/useGetWindowSize';
import React from 'react';
import palList from 'pals.json';
import { Card } from './card';
import { IPalInfo } from 'components/pals/pal.types';

export const Grid = () => {
  const { width, height } = useGetWindowSize();
  return (
    <div className="grid-container" style={{ width: width, height: height }}>
      {palList.map((pal: IPalInfo, idx) => (
        <Card key={idx} pal={pal} />
      ))}
    </div>
  );
};
