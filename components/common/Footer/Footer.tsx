import Image from 'next/image';

import { StyledFooter } from './footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo-container">
        <Image
          src="/svg/aquifera-logo-vertical.svg"
          alt="logo aquifera"
          layout="fill"
        />
      </div>

      <ul>
        <li>
          <a
            href="https://www.youtube.com/watch?v=1Uy5nhjXrHU"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/svg/youtube-outline-primary.svg"
              alt="youtube"
              width={36}
              height={36}
            />
            <span>Aquifera ID</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Aquifer-Nusantara-114754037059244"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/svg/facebook-outline-primary.svg"
              alt="facebook"
              width={24}
              height={24}
            />
            <span>Aquifer Nusantara</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/aquifera_id/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/svg/instagram-outline-primary.svg"
              alt="instagram"
              width={24}
              height={24}
            />
            <span>aquifera_id</span>
          </a>
        </li>
        <li>
          <a href="mailto:aquifernusantara@gmail.com">
            <Image
              src="/svg/mail-outline-primary.svg"
              alt="mail"
              width={24}
              height={24}
            />
            <span>aquifernusantara@gmail.com</span>
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
