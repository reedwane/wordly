import styled from "styled-components";
import { headerFamily } from "styles/variables";

export const AppWrapper = styled.div`
  text-align: center;
  height: 100%;
  min-height: 100vh;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${headerFamily};
  }
`;
