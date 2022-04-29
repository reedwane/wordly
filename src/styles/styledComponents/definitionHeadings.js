import styled from "styled-components";

export const DefinitionHeadingsWrapper = styled.div`
  text-align: left;
  padding: 1em 1em 0;

  @media screen and (min-width: 600px) {
    text-align: center;
  }

  span {
    font-weight: bold;
  }

  h3,
  h4 {
    text-align: left;
    margin: 1em 0 1em;
    span {
      text-transform: uppercase;
    }

    @media screen and (min-width: 600px) {
      text-align: center;
    }
  }
`;
