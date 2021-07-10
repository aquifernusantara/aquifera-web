import Link from 'next/link';
import { useRouter } from 'next/router';

import { ButtonProps } from './button.model';
import { StyledButton } from './button.styled';

const Button = ({ children, href }: ButtonProps) => {
  const router = useRouter();
  return (
    <Link href={href ? href : router.pathname} passHref>
      <StyledButton>{children}</StyledButton>
    </Link>
  );
};

export default Button;
