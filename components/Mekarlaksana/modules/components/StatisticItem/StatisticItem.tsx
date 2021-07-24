import React from 'react';

import { StatisticItemProps } from './statistic-item.model';
import { StyledStatisticItem } from './statistic-item.styled';

const StatisticItem: React.FC<StatisticItemProps> = ({
  description,
  value,
}) => {
  return (
    <StyledStatisticItem>
      <span className="statistic__value">{value}</span>
      <span>{description}</span>
    </StyledStatisticItem>
  );
};

export default StatisticItem;
