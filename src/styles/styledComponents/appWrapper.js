import styled from "styled-components";
import { headerFamily } from "../variables";

export const AppWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${headerFamily};
  }
`;
