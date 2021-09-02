/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import React, { useState } from 'react';

import NavigationItem from '../NavigationItem';
import { StyledSidebar } from './sidebar.styled';

const TitleContainer = ({ siderOpen, setSiderOpen, className }: {
  siderOpen: boolean, setSiderOpen: Function, className?: string
}) => (
  <div className={classNames('tentang-air-container', className)}>
    <button className="btn-hamburger-icon" onClick={() => setSiderOpen(!siderOpen)}>
      <img
        src={siderOpen ? '/svg/close_icon.svg' : '/svg/ci_hamburger.svg'}
        alt="hamburger icon"
      />
    </button>
    <h5 className="tentang-air-title">Pemahaman Tentang Air</h5>
  </div>
)

const Sidebar = () => {
  const [siderOpen, setSiderOpen] = useState(false);

  const onNavigate = (id: string) => {
    document.getElementById(id).scrollIntoView();
    setSiderOpen(false);
  }

  return (
    <StyledSidebar siderOpen={siderOpen}>
      <TitleContainer siderOpen={siderOpen} setSiderOpen={setSiderOpen} />
      <div className="navigation-slider">
        <TitleContainer className="sider" siderOpen={siderOpen} setSiderOpen={setSiderOpen} />
        <div className="navigation">
          <NavigationItem onClick={() => onNavigate('pemahaman-1')}>Memulai Pengertian</NavigationItem>
          <NavigationItem onClick={() => onNavigate('pemahaman-2')}>Bagaimana jika kekurangan air bersih</NavigationItem>
          <NavigationItem onClick={() => onNavigate('pemahaman-3')}>Apakah Indonesia Kekurangan Air Bersih?</NavigationItem>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
