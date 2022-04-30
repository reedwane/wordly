import styled from "styled-components";
import { primaryColor } from "styles/variables";

export const ErrorWrapper = styled.div`
  position: relative;
  color: ${primaryColor};
  display: block;
  padding: 50% 5%;
  min-height: 80vh;
  left: 50%;
  transform: translate(-50%, 0%);
`;
