import React from 'react';

import { NavigationItemProps } from './navigation-item.model';
import { StyledNavigationItem } from './navigation-item.styled';

const NavigationItem: React.FC<NavigationItemProps> = ({ children, onClick }) => {
  return <StyledNavigationItem onClick={onClick}>{children}</StyledNavigationItem>;
};

export default NavigationItem;
