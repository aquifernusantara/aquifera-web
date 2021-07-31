import React from 'react';

import Button from '@components/common/Button';

import { StyledHero } from './hero.styled';

const Hero = () => {
  return (
    <StyledHero>
      <video src="mp4/mekarlaksana.mp4" muted loop autoPlay></video>
      <div className="overlay">
        <div className="title">
          <h1>
            Kami siap hadir membantu menyelesaikan permasalahan krisis air
            bersih
          </h1>
        </div>
        <Button href="/kontribusi">Bantu Selesaikan Masalah</Button>
      </div>
    </StyledHero>
  );
};

export default Hero;
