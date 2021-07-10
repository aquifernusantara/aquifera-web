import { Layout } from './lazy-image.enum';

export interface StyledLazyImageProps {
  width: number;
  height: number;
}

export interface LazyImageProps {
  alt: string;
  src: any;
  width: number;
  height: number;
  layout: Layout;
  className: string;
}
