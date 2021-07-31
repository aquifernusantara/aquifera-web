import { PopupButton } from '@typeform/embed-react';

import React from 'react';
import { useState } from 'react';

import Button from '@components/common/Button';

import { ContributorType } from './contribution-card.enum';
import { StyledContributionCard } from './contribution-card.styled';

const ContributionCard = () => {
  const [selectedType, setSelectedType] = useState(ContributorType.Investor);

  return (
    <StyledContributionCard>
      <div className="contributor-type">
        <div>
          <Button
            onClick={() => setSelectedType(ContributorType.Investor)}
            secondary={selectedType !== ContributorType.Investor}
            squareCorner
          >
            Investor
          </Button>
        </div>

        <div>
          <Button
            onClick={() => setSelectedType(ContributorType.Sukarelawan)}
            secondary={selectedType !== ContributorType.Sukarelawan}
            squareCorner
          >
            Sukarelawan
          </Button>
        </div>
      </div>
      {selectedType === ContributorType.Investor ? (
        <>
          <p>
            Untuk teman-teman yang ingin membantu dalam bentuk dana bisa
            bergabung menjadi investor kami. Dalam kontribusi ini, teman-teman
            dibagi menjadi 2 jalur penyaluran dana. Dana yang pertama adalah
            dana untuk projek, dimana dana tersebut 100% akan digunakan untuk
            kepentingan projek, seperti pengadaan sarana-prasarana, biaya dalam
            implementasi water box, dan kebutuhan lainnya untuk menunjang
            keberhasilan projek.
          </p>

          <p>
            Dana yang kedua adalah dana untuk internalisasi, biaya-biaya yang
            dikeluarkan sebelum projek seperti biaya survey, biaya riset, biaya
            untuk perawatan alat dan biaya-biaya untuk kebutuhan internal
            lainnya.
          </p>

          <p>
            Kami menerapkan sistem 2 penyaluran dana tersebut, agar dana yang
            diberikan oleh teman-teman tepat sasaran sehingga tidak akan ada
            penyalahgunaan dana. Untuk info lebih lanjut teman-teman bisa
            menghubungi kami.
          </p>
        </>
      ) : (
        <>
          <p>
            Untuk teman-teman yang ingin terlibat langsung dalam seluruh proses
            projek bisa bergabung menjadi volunteer. Teman-teman bisa terlibat
            langsung bersama tim Aquifera mengerjakan projek air bersih di
            berbagai bidang yang teman-teman sukai.
          </p>

          <p>
            Bukan hanya terjun ke lapangan saja, teman-teman juga bisa membantu
            di bagian marketing, desain, public relation, research dan lain
            sebagainya. Selain mendapatkan pengalaman seru bersama tim Aquifera,
            teman-teman juga memberikan kebermanfaatan bagi warga yang
            kekurangan air bersih. Tunggu tanggal mainnya yaa... Yuk gabung
            bersama kami!
          </p>
        </>
      )}

      <PopupButton id={selectedType} className="typeform-button">
        Yuk, berinvestasi dalam kebaikan
      </PopupButton>
    </StyledContributionCard>
  );
};

export default ContributionCard;
