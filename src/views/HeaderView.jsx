import { Link, NavLink } from 'react-router-dom';

const HeaderView = () => {
  return (
    <div className="d-flex justify-content-between p-3 align-items-center justify-center ">
      <Link to={'/home'} className="d-flex gap-3 justify-content-center align-items-center text-decoration-none">
        <img height={50} src="/c-logo.png" />
        <h2 className={"text-light "}>Coin Market</h2>
      </Link>

      <nav className="d-flex gap-3 ">
        <NavLink className={'text-light text-decoration-none'} to={'/'}>
          Giriş Yap
        </NavLink>
        <NavLink className={'text-light text-decoration-none'} to={'/home'}>
          Anasayfa
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
