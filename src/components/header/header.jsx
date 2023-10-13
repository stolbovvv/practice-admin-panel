import logo from '../../assets/logo.svg';

import './header.css';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Hero logo" />
      <h1 className="header__title">Heroes administration panel</h1>
    </header>
  );
}

export { Header };
