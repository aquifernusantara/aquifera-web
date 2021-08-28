/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';

import { StyledHeader } from './header.styled';
import MenuList from './MenuList';

const Header = () => {
  const [siderOpen, setSiderOpen] = useState(false);
  return (
    <StyledHeader siderOpen={siderOpen}>
      <nav>
        <div className="block--left">
          <Link href="/">
            <a className="logo">
              <img
                src="/svg/aquifera-logo-horizontal.svg"
                alt="logo aquifera"
                className="logo-aquifera"
              />
            </a>
          </Link>
        </div>
        <div className="block--right">
          <MenuList />
          <button className="btn-hamburger-icon" onClick={() => setSiderOpen(!siderOpen)}>
            <img
              src="/svg/ci_hamburger.svg"
              alt="hamburger icon"
            />
          </button>
        </div>
        <div className="menu-slider-mobile">
          <MenuList />
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
