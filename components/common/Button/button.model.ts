export interface ButtonProps {
  children: string;
  secondary?: boolean;
  href?: string;
  download?: boolean;
  squareCorner?: boolean;
  onClick?: () => any;
}

export interface StyledButtonProps {
  secondary: boolean;
  squareCorner: boolean;
}
