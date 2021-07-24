import React from 'react';

import { StyledHowWeWork } from './how-we-work.styled';
import PromotionalCard from './modules/components/PromotionalCard';
import { OUR_WORK } from './modules/components/PromotionalCard/promotional-card.constant';

const HowWeWork = () => {
  return (
    <StyledHowWeWork>
      <div className="title__container">
        <h2>Cara Kami Bekerja</h2>
        <p>
          Kami berkomitmen untuk sebanyak-banyaknya menebarkan kebaikan dan
          kebermanfaatan.
        </p>
        <hr />
      </div>

      <div className="content__container">
        {OUR_WORK.map(work => (
          <PromotionalCard
            key={work.title}
            imageUrl={work.imageUrl}
            title={work.title}
            description={work.description}
            additionalDescription={work.additionalDescription}
          />
        ))}
      </div>
    </StyledHowWeWork>
  );
};

export default HowWeWork;
