import styled from "styled-components";
import { lightPrimaryColor, primaryColor } from "styles/variables";

export const DefinitionMapWrapper = styled.div`
  padding: 0 2em;
  text-align: justify;

  max-width: 1440px;
  margin: 0 auto;

  .tabs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${primaryColor};
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
