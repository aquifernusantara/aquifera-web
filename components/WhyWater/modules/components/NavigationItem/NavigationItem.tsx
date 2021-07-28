import React from 'react';

import { NavigationItemProps } from './navigation-item.model';
import { StyledNavigationItem } from './navigation-item.styled';

const NavigationItem: React.FC<NavigationItemProps> = ({ children }) => {
  return <StyledNavigationItem>{children}</StyledNavigationItem>;
};

export default NavigationItem;
