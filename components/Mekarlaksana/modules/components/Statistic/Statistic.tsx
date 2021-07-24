import StatisticItem from '../StatisticItem/StatisticItem';
import { STATISTIC_ITEMS } from './statistic.constant';
import { StyledStatistic } from './statistic.styled';

const Statistic = () => {
  return (
    <StyledStatistic>
      {STATISTIC_ITEMS.map(item => (
        <StatisticItem
          key={item.description}
          description={item.description}
          value={item.value}
        />
      ))}
    </StyledStatistic>
  );
};

export default Statistic;
