import { useGetWindowSize } from 'hooks/useGetWindowSize';
import React from 'react';

export const Grid = () => {
  const { width, height } = useGetWindowSize();
  return (
    <div>
      current Width height = {width}px {height}px
    </div>
  );
};
