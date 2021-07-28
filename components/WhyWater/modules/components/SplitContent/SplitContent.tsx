import React from 'react';

import Content from '../Content';
import Sidebar from '../Sidebar';
import { StyledSplitContent } from './split-content.styled';

const SplitContent = () => {
  return (
    <StyledSplitContent>
      <nav className="sidebar">
        <Sidebar />
      </nav>
      <div className="content">
        <Content />
      </div>
    </StyledSplitContent>
  );
};

export default SplitContent;
