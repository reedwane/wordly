import styled from "styled-components";

export const DefinitionMapWrapper = styled.div`
  padding: 0 2em;
  text-align: justify;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1440px;
  margin: 0 auto;

  ul {
    padding: 0.5em;
  }

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
