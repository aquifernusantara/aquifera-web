/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Button from '@components/common/Button';

import { StyledMekarlaksanaDescription } from './mekarlaksana-description.styled';

const MekarlaksanaDescription = () => {
  return (
    <StyledMekarlaksanaDescription>
      <div className="description">
        <h2>Desa Mekarlaksana</h2>
        <p>
          Desa Mekarlaksana yang merupakan desa yang berada di Kecamatan
          Ciparay, Kabupaten Bandung, Jawa Barat. Secara geografis, desa ini
          dilingkupi oleh berbagai sumber daya alam. Di wilayah utara terdapat
          aliran sungai serta persawahan, dan di area selatan dilingkupi deretan
          tanaman lokal yaitu palawija.
        </p>
        <Button href="/pencapaian-kami/mekarlaksana">Lihat projek</Button>
      </div>
      <div className="image">
        <img src="/png/mekarlaksana.png" alt="waterbox" />
      </div>
    </StyledMekarlaksanaDescription>
  );
};

export default MekarlaksanaDescription;
