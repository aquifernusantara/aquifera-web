import { PageTitleBackgroundColor } from './page-title-card.enum';
import { PageTitleProps } from './page-title-card.model';
import { StyledPageTitle } from './page-title-card.styled';

const PageTitleCard: React.FC<PageTitleProps> = ({
  title,
  description,
  backgroundImagePath,
  backgroundColor = PageTitleBackgroundColor.Secondary,
}) => {
  return (
    <StyledPageTitle backgroundColor={backgroundColor}>
      <div className="page-title-card">
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
    </StyledPageTitle>
  );
};

export default PageTitleCard;
