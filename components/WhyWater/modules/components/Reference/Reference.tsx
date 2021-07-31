import React from 'react';

import { StyledReference } from './reference.styled';

const Reference = () => {
  return (
    <StyledReference>
      <h4 className="title">Referensi</h4>
      <ol>
        <li>
          <a
            href="https://alvawater.co.id/2020/10/22/berapa-persentase-rata-rata-kandungan-air-yang-ideal-dalam-tubuh-anda/#:~:text=Persentase%20kandungan%20cairan%20tubuh%20yang,antara%2050%20dan%2065%20persen."
            target="_blank"
            rel="noreferrer"
          >
            Memulai Pengertian
          </a>
        </li>
        <li>
          <a
            href="https://www.sehatq.com/artikel/akibat-kekurangan-air-bersih-bisa-sebabkan-infeksi-penyakit-menular-ini"
            target="_blank"
            rel="noreferrer"
          >
            Bagaimana Jika Kekurangan Air Bersih
          </a>
        </li>
        <li>
          <a
            href="https://www.researchgate.net/publication/333557597_Pengaruh_Krisis_Air_Bersih_Terhadap_Kualitas_Air_Di_Indonesia_oleh_Rizki_Sandi_Laksono"
            target="_blank"
            rel="noreferrer"
          >
            Apakah Indonesia Kekurangan Air Bersih
          </a>
        </li>
      </ol>
    </StyledReference>
  );
};

export default Reference;
