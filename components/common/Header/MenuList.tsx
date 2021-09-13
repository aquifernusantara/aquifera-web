import { useRouter } from 'next/router';
import cn from 'classnames';
import Link from 'next/link';
import { HeaderRoutes } from './header.constant';

const MenuList = ({ ...restProps}) => {
  const router = useRouter();
  return (
    <ul {...restProps}>
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
  )
}

export default MenuList;
