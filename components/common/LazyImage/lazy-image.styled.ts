import styled from 'styled-components';

import { StyledLazyImageProps } from './lazy-image.model';

export const StyledLazyImage = styled.div<StyledLazyImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${width => (width ? `${width}px` : null)};
  height: ${({ height }) => (height ? `${height}px` : null)};
`;
