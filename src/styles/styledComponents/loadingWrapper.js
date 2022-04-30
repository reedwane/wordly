import styled from "styled-components";
import { primaryColor } from "styles/variables";

export const LoadingWrapper = styled.div`
  color: ${primaryColor};
  display: block;

  div {
    &::after {
      background: ${primaryColor};
    }
  }

  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 60vh;
  transform: translate(-50%, 0);
`;
