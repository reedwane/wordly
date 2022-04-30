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

  position: relative;
  left: 50%;
  padding: 50% 5%;
  min-height: 80vh;
  transform: translate(-50%, 0%);
`;
