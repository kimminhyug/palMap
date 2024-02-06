import './assets/scss/main.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Test } from 'pages/test';
import { Card } from 'components/card/card';
ReactDOM.render(
  <React.StrictMode>
    {/* <Test /> */}
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);
