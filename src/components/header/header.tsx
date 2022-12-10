import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    <header className="page-header film-card__head">
      <div className="logo">
        <a href={'/'} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {authorizationStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to={'/mylist'}><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
            </div>
          </li>
          <li className="user-block__item">
            <a href={'/'} className="user-block__link">Sign out</a>
          </li>
        </ul>
        :
        <div className="user-block">
          <Link to={'/login'} className="user-block__link">Sign in</Link>
        </div>}
    </header>
  );
}

export default Header;