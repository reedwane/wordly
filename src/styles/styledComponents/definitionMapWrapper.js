import styled from "styled-components";

export const DefinitionMapWrapper = styled.div`
  padding: 0 2em;
  text-align: justify;

  h5 {
    text-transform: capitalize;
    font-size: 1rem;
    text-align: center;
    margin: 1em;

    @media screen and (min-width: 600px) {
      text-align: left;
    }
  }
`;
