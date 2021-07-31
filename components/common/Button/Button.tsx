import Link from 'next/link';

import { ButtonProps } from './button.model';
import { StyledButton } from './button.styled';

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  secondary = false,
  download = false,
  squareCorner = false,
}) => {
  if (download) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        <StyledButton secondary={secondary} squareCorner={squareCorner}>
          {children}
        </StyledButton>
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} passHref>
        <StyledButton secondary={secondary} squareCorner={squareCorner}>
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      secondary={secondary}
      squareCorner={squareCorner}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
