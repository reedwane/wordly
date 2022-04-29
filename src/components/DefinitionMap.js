import { DefinitionMapWrapper } from "styles/styledComponents/definitionMapWrapper";

const DefinitionMap = ({ initialDefinition }) => {
  return (
    <DefinitionMapWrapper>
      {initialDefinition.meanings.map((partOfSpeech) => (
        <div
          key={
            Array.prototype.indexOf.call(
              initialDefinition.meanings,
              partOfSpeech
            ) + "id"
          }
        >
          <h5>{partOfSpeech.partOfSpeech} </h5>

          <ul>
            {partOfSpeech.definitions.map((definition) => (
              <li
                key={
                  Array.prototype.indexOf.call(
                    partOfSpeech.definitions,
                    definition
                  ) + "id"
                }
              >
                <p>{definition.definition}</p>
                {definition.example && <p>Example: {definition.example}</p>}
                {definition.synonyms.length !== 0 && (
                  <p>Synonyms: {definition.synonyms.join(", ")}.</p>
                )}

                {definition.antonyms.length !== 0 && (
                  <p>Antonyms: {definition.antonyms.join(", ")}.</p>
                )}
              </li>
            ))}
          </ul>

          {partOfSpeech.synonyms.length !== 0 && (
            <p>
              {partOfSpeech.partOfSpeech} Synonyms:{" "}
              {partOfSpeech.synonyms.join(", ")}
            </p>
          )}

          {partOfSpeech.antonyms.length !== 0 && (
            <p>
              {partOfSpeech.partOfSpeech} Antonyms:{" "}
              {partOfSpeech.antonyms.join(", ")}
            </p>
          )}
        </div>
      ))}
    </DefinitionMapWrapper>
  );
};

export default DefinitionMap;
