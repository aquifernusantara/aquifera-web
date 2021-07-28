import React from 'react';

import { StyledReference } from './reference.styled';

const Reference = () => {
  return (
    <StyledReference>
      <h4 className="title">Referensi</h4>
      <ol>
        <li>
          <a>Memulai Pengertian</a>
        </li>
        <li>
          <a>Bagaimana Jika Kekurangan Air Bersih</a>
        </li>
        <li>
          <a>Apakah Indonesia Kekurangan Air Bersih</a>
        </li>
      </ol>
    </StyledReference>
  );
};

export default Reference;
