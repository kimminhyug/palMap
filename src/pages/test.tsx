import React, { useRef, useState, useEffect } from 'react';
import maplibregl from 'maplibre-gl';

export const Test = (): React.ReactElement => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(0);
  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,

      style: {
        version: 8,
        layers: [
          {
            id: 'palMapTile',
            // name: 'pal Map Tile',
            type: 'raster',
            source: 'palMapTile',
            // maxzoom: ,
            // minzoom: 0,
            // 'directory': '기본 배경지도'
          },
        ],
        sources: {
          palMapTile: {
            maxzoom: 4,
            minzoom: 0,
            type: 'raster',
            tiles: ['/public/tiles/{z}/{x}/{y}.png'],
            tileSize: 256,
          },
        },
      },
      center: [lng, lat],
      zoom: zoom,
    });
  }, [map]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
