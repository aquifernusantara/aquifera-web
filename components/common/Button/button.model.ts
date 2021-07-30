export interface ButtonProps {
  children: string;
  secondary?: boolean;
  href?: string;
  onClick?: () => any;
}

export interface StyledButtonProps {
  secondary: boolean;
}
