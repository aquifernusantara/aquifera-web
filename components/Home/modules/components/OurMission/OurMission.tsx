/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { StyledOurMission } from './our-mission.styled';

const OurMission = () => {
  return (
    <StyledOurMission>
      <div className="title__container">
        <h2 className="title__text">Projek Kami Selanjutnya</h2>
        <span>
          Berbekal dengan teknologi yang kami miliki yakni Water Box, kami yakin
          bisa mewujudkan mimpi kami:
        </span>
      </div>

      <div className="content__container">
        <img
          className="map-of-indonesia"
          src="svg/map-of-indonesia.svg"
          alt="Map of Indonesia"
        />
        <p>
          Dalam waktu 5 tahun kedepan Aquifera memiliki target untuk dapat
          menyediakan 1000 projek di 100 daerah di seluruh Indonesia.{' '}
        </p>
      </div>
    </StyledOurMission>
  );
};

export default OurMission;
