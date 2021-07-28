import React from 'react';

import NavigationItem from '../NavigationItem';
import { StyledSidebar } from './sidebar.styled';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h5>Pemahaman Tentang Air</h5>
      <hr />
      <div className="navigation">
        <NavigationItem>Memulai Pengertian</NavigationItem>
        <NavigationItem>Bagaimana jika kekurangan air bersih</NavigationItem>
        <NavigationItem>Apakah Indonesia Kekurangan Air Bersih?</NavigationItem>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
