import logo from "assets/favicon.png";
import { HeaderWrapper } from "styles/styledComponents/headerWrapper";

const Header = () => {
  const toTop = () => {
    window.scrollTo({
      //scroll to top
      top: 10,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <HeaderWrapper onClick={() => toTop()}>
      <img src={logo} alt="logo" />
      <p>Hello Wordly Seeker</p>
    </HeaderWrapper>
  );
};

export default Header;
