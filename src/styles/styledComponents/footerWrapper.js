import styled from "styled-components";
import { lightPrimaryColor, primaryColor, white } from "styles/variables";

export const FooterWrapper = styled.footer`
  width: 100%;
  font-size: 0.8rem;
  line-height: 150%;
  font-weight: 200;
  color: ${white};
  background-color: ${lightPrimaryColor};
  border-top: 1px solid ${primaryColor};

  a {
    color: ${white};
    text-decoration: underline;
    text-decoration-color: ${primaryColor};
  }
`;
