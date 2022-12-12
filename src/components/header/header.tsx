import { ReactNode } from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

type HeaderProps = {
  className?: string;
  children?: ReactNode;
}

function Header({ className = '', children } : HeaderProps): JSX.Element {
  return(
    <header className={`page-header ${className}`}>
      <Logo />
      {children}
      <UserBlock />
    </header>
  );
}

export default Header;
