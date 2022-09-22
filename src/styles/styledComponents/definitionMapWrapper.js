import styled from "styled-components";
import { lightPrimaryColor, primaryColor, white } from "styles/variables";

export const DefinitionMapWrapper = styled.div`
  padding: 0 2em 5em;
  text-align: justify;

  max-width: 1440px;
  margin: 0 auto;

  .tabs {
    display: inline-flex;
    min-width: 50%;
    align-items: center;
    max-width: 100%;
    overflow: auto;
    gap: 1rem;
    margin: 1rem 0 1rem;
    border-bottom: 1px solid ${primaryColor};

    ::-webkit-scrollbar {
      height: 1px;
    }

    .active {
      background-color: ${primaryColor};
      color: ${white};
    }
  }

  ul {
    padding: 0.5em;
    padding-left: 1em;

    li {
      margin-left: 0px;
    }
  }

  h5 {
    text-transform: capitalize;
    font-size: 1rem;
    text-align: center;
    color: ${primaryColor};
    padding: 0.5rem;
    cursor: pointer;

    @media screen and (min-width: 600px) {
      text-align: left;
    }
  }

  p {
    span {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 1rem;
    }

    .related {
      display: inline-block;
      margin-left: 0.2em;
      cursor: pointer;
      font-weight: 500;
      text-decoration: underline;
      text-decoration-color: ${lightPrimaryColor};
    }
  }
`;
