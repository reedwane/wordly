import styled from "styled-components";
import { headerFamily, primaryColor, white } from "styles/variables";

export const HeaderWrapper = styled.header`
  border: 1px solid ${primaryColor};
  height: 3em;
  padding: 0.2em 0.5em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
  background-color: ${white};

  @media screen and (min-width: 600px) {
    justify-content: space-around;
  }

  img {
    height: 100%;
  }

  p {
    display: inline-block;
    font-family: ${headerFamily};
    font-weight: 700;
    color: ${primaryColor};
  }
`;
