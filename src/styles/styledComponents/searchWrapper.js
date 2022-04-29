import styled from "styled-components";
import { bodyFamily, lightPrimaryColor, primaryColor } from "styles/variables";

export const SearchWrapper = styled.div`
  display: inline-block;
  width: 80%;
  max-width: 350px;
  margin: 2em auto 0;

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
  }

  button {
    border-radius: 0 10px 10px 0;
    width: 30%;
    cursor: pointer;
  }

  ul {
    border: 1px solid ${primaryColor};
    width: 50%;
    padding: 0em 1em 0em;
    margin: 1em auto;
    border-radius: 10px;

    @media screen and (min-width: 600px) {
      margin: 0.5em 0;
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
