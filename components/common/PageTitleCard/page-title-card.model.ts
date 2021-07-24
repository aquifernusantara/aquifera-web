import { PageTitleBackgroundColor } from './page-title-card.enum';

export interface PageTitleProps {
  title: string;
  description: string;
  backgroundImagePath?: string;
  backgroundColor?: PageTitleBackgroundColor;
}

export interface StyledPageTitleProps {
  backgroundColor: PageTitleBackgroundColor;
  backgroundImagePath?: string;
}
