import { FooterWrapper } from "styles/styledComponents/footerWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer footer--attribution">
        <p className="attribution-text">
          Created by{" "}
          <a href="https://github.com/reedwane">Abdulkareem Ridwan</a>
        </p>
        <span>&copy; Ridwan Abdulkareem 2022</span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
