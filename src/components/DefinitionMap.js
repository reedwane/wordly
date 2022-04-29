import useFetchNew from "hooks/useFetchNew";
import { DefinitionMapWrapper } from "styles/styledComponents/definitionMapWrapper";

const DefinitionMap = ({ initialDefinition }) => {
  const { getNew } = useFetchNew();

  const handleNew = (word) => {
    getNew(word);
  };

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
                  <p>
                    <span>Synonyms:</span>{" "}
                    {definition.synonyms.map((word) => (
                      <span className="related" onClick={() => handleNew(word)}>
                        {word}
                        {", "}
                      </span>
                    ))}
                    .
                  </p>
                )}

                {definition.antonyms.length !== 0 && (
                  <p>
                    <span>Antonyms: </span>
                    {definition.antonyms.map((word) => (
                      <span className="related" onClick={() => handleNew(word)}>
                        {word}
                        {", "}
                      </span>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ul>

          {partOfSpeech.synonyms.length !== 0 && (
            <p>
              <span>{partOfSpeech.partOfSpeech} Synonyms: </span>
              {partOfSpeech.synonyms.map((word) => (
                <span className="related" onClick={() => getNew(word)}>
                  {word}
                  {", "}
                </span>
              ))}
            </p>
          )}

          {partOfSpeech.antonyms.length !== 0 && (
            <p>
              <span>{partOfSpeech.partOfSpeech} Antonyms: </span>
              {partOfSpeech.antonyms.map((word) => (
                <span className="related" onClick={() => getNew(word)}>
                  {word}
                  {", "}
                </span>
              ))}
            </p>
          )}
        </div>
      ))}
    </DefinitionMapWrapper>
  );
};

export default DefinitionMap;
