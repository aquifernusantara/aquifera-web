/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Button from '@components/common/Button';

import { StyledMekarlaksanaDescription } from './mekarlaksana-description.styled';

const MekarlaksanaDescription = () => {
  return (
    <StyledMekarlaksanaDescription>
      <div className="description">
        <h2>Aquifera Waterbox</h2>
        <p>
          Water Box adalah perangkat IoT pengukur debit otomatis. Water Box
          dapat digunakan untuk melakukan pencatatan debit air yang mengalir
          didalam pipa. Kelak data yang terkumpulkan secara berkala akan
          diteruskan ke cloud baik secara langsung melalui gsm/wifi atau melalui
          perantara gateway.
        </p>
        <Button href="/projek/mekarlaksana">Lihat projek</Button>
      </div>
      <div className="image">
        <img src="/png/mekarlaksana.png" alt="waterbox" />
      </div>
    </StyledMekarlaksanaDescription>
  );
};

export default MekarlaksanaDescription;
