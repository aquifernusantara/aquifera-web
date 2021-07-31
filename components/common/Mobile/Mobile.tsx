/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import SEO from '../SEO';
import { StyledMobile } from './mobile.styled';

const Mobile = () => {
  return (
    <>
      <SEO title="Aquifer Nusantara" />
      <StyledMobile>
        <img src="/svg/aquifera.svg" alt="logo aquifera" />
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=1Uy5nhjXrHU"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/svg/youtube.svg"
                alt="youtube"
                width={36}
                height={36}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Aquifer-Nusantara-114754037059244"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/svg/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/aquifera_id/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/svg/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>
        <p>website kami belum tersedia dalam versi mobile</p>
      </StyledMobile>
    </>
  );
};

export default Mobile;
