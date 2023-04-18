import logo from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header content__element content__element_type_header">
      <img className="header__logo" src={logo} alt="Логотип Место" />
    </header>
  );
}

export default Header;