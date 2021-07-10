import Image from 'next/image';

import { useState } from 'react';

import { Layout } from './lazy-image.enum';
import { LazyImageProps } from './lazy-image.model';
import { StyledLazyImage } from './lazy-image.styled';

const LazyImage: React.FC<LazyImageProps> = ({
  alt,
  src,
  width,
  height,
  className,
  layout = Layout.Fill,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return;
  }

  return (
    <StyledLazyImage width={width} height={height} className={className}>
      <Image
        onLoad={() => setIsLoaded(true)}
        alt={alt}
        src={src}
        layout={layout}
      />
    </StyledLazyImage>
  );
};

export default LazyImage;
