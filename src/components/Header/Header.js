import "./Header.css"
import logo from './../../logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <img src={logo} alt="logo" className="header__logo" />
        </div>
      </div>
    </div>
  )
}

export default Header;