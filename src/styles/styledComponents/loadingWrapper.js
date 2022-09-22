import styled from "styled-components";
import { primaryColor } from "styles/variables";

export const LoadingWrapper = styled.div`
  color: ${primaryColor};
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;

  @media screen and (min-width: 1024px) {
    position: relative;
    height: 80%;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loader {
    border: 10px solid #f3f3f3;
    border-top: 10px solid ${primaryColor};
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;

    display: inline-block;
    position: relative;
    top: 30%;
  }
`;
