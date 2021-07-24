/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { StyledSponsorship } from './sponsorship.styled';

const Sponsorship = () => {
  return (
    <StyledSponsorship>
      <div className="description">
        Pilot project kami juga bekerjasama dengan Majelis Telkomsel Taqwa
        sebagai donatur paling besar. Terimakasih Telkomsel.
      </div>

      <div className="image">
        <img src="/svg/ic_mtt.svg" alt="Logo Majelis Telkom Takwa" />
      </div>
    </StyledSponsorship>
  );
};

export default Sponsorship;
