/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';

import cn from 'classnames';

import { HeaderRoutes } from './header.constant';
import { StyledHeader } from './header.styled';

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <nav>
        <div className="block--left">
          <Link href="/">
            <a className="logo">
              <img
                src="/svg/icons/logo-aquifera.svg"
                alt="logo aquifera"
                className="logo-aquifera"
              />
            </a>
          </Link>
        </div>
        <div className="block--right">
          <ul>
            {HeaderRoutes.map(headerRoute => (
              <li key={headerRoute.link}>
                <Link href={headerRoute.link}>
                  <a
                    className={cn({
                      active: router.pathname === headerRoute.link,
                    })}
                  >
                    {headerRoute.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
