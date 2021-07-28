import React from 'react';

import { TopicProps } from './topic.model';
import { StyledTopic } from './topic.styled';

const Topic: React.FC<TopicProps> = ({ children }) => {
  return <StyledTopic>{children}</StyledTopic>;
};

export default Topic;
