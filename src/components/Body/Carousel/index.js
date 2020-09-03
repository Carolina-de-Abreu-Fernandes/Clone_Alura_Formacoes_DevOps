import React, { ReactElement } from 'react';
import Carousel from 'nice-react-carousel';
import Twitch from '../../../assets/img/twitch.png';
import Discord from '../../../assets/img/discord.png';
import Telegram from '../../../assets/img/telegram.jpg';
import GitHub from '../../../assets/img/github.png';
import Left from '../../../assets/img/arrow-left.png';
import Right from '../../../assets/img/arrow-right.png';
import './style.css';

function NiceCarousel() {
  const customNextArrow = <customNextArrow />;
  return (
    <div className="carousel">
      <Carousel mode="normal" itemsBySlide={2} customNextArrow={Right}>
        <customNextArrow>
          <img src={Right} alt="" />
        </customNextArrow>
        <div>
          <img src={Twitch} alt="Twitch" />
        </div>
        <div>
          <img src={Discord} alt="Discord" />
        </div>
        <div>
          <img src={GitHub} alt="GitHub" />
        </div>
        <div>
          <img src={Telegram} alt="Telegram" />
        </div>
      </Carousel>
    </div>
  );
}

export default NiceCarousel;
