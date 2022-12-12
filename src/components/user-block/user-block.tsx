import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logoutAction());
  };
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const getUserBlockTemplate = (authStatus: AuthorizationStatus): JSX.Element =>
    authStatus === AuthorizationStatus.Auth ?
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={'/mylist'}><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
          </div>
        </li>
        <li className="user-block__item">
          <span onClick={onClick} className="user-block__link">Sign out</span>
        </li>
      </ul>
      :
      <div className="user-block">
        <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
      </div>;

  return getUserBlockTemplate(authorizationStatus);
}

export default UserBlock;
