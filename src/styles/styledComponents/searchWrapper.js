import styled from "styled-components";
import {
  bodyFamily,
  lightPrimaryColor,
  primaryColor,
  white,
} from "styles/variables";

export const SearchWrapper = styled.div`
  display: inline-block;
  width: 80%;
  max-width: 350px;
  margin: 2em auto 0;
  position: relative;

  input,
  button {
    height: 3em;
    background-color: ${primaryColor};
    color: white;
    outline: none;
    border: 1px solid white;
    font-family: ${bodyFamily};

    ::placeholder {
      color: ${lightPrimaryColor};
    }
  }

  input {
    border-radius: 10px 0 0 10px;
    width: 70%;
    text-indent: 10%;

    @media screen and (min-width: 600px) {
      text-align: center;
      text-indent: 0;
    }
  }

  button {
    border-radius: 0 10px 10px 0;
    width: 30%;
    cursor: pointer;
  }

  ul {
    border: 1px solid ${primaryColor};
    background-color: ${white};
    width: 50%;
    padding: 0em 1em 0em;
    margin: 1em auto;
    border-radius: 10px;
    position: absolute;
    z-index: 2;

    @media screen and (min-width: 600px) {
      margin: 0.5em 0;
      width: 70%;
    }
  }

  li {
    list-style-type: none;
    color: ${primaryColor};
    font-weight: bold;
    border-bottom: 1px solid ${primaryColor};
    cursor: pointer;

    &:last-of-type {
      border: none;
    }
  }
`;
