import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Menu/index';
import Body from './components/Body/index';
import NiceCarousel from './components/Body/Carousel/index';
ReactDOM.render(
  <customNextArrow />,
  <React.StrictMode>
    <Header />,
    <Body />,
    <NiceCarousel />,
  </React.StrictMode>,
  document.getElementById('root')
);
