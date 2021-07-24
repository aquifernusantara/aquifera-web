/* eslint-disable @next/next/no-img-element */
import { PromotionalCardProps } from './promotional-card.model';
import { StyledPromotionalCard } from './promotional-card.styled';

const PromotionalCard: React.FC<PromotionalCardProps> = ({
  imageUrl,
  title,
  description,
  additionalDescription,
}) => {
  return (
    <StyledPromotionalCard>
      <img src={`svg/${imageUrl}.svg`} alt={title} />
      <span className="title">{title}</span>
      <p className="description">{description}</p>
      <p className="additional-description">{additionalDescription}</p>
      <img
        src="svg/ic_card-pattern.svg"
        alt="pattern"
        className="card-pattern"
      />
    </StyledPromotionalCard>
  );
};

export default PromotionalCard;
