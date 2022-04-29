import logo from "assets/favicon.png";
import { HeaderWrapper } from "styles/styledComponents/headerWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt="logo" />
      <p>Hello Wordly Seeker</p>
    </HeaderWrapper>
  );
};

export default Header;
