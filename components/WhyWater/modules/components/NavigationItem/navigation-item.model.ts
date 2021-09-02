import { ReactChild } from 'react';

export interface NavigationItemProps {
  children: ReactChild;
  onClick?: Function;
}

export interface StyledNavigationItemProps {
  onClick: any;
}
