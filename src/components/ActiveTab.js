import useFetchNew from "hooks/useFetchNew";

const ActiveTab = ({ partOfSpeech }) => {
  const { getNew } = useFetchNew();

  const handleNew = (word) => {
    getNew(word);
  };
  return (
    <div>
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
                {definition.synonyms.map((word, i) => (
                  <span
                    key={i}
                    className="related"
                    onClick={() => handleNew(word)}
                  >
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
                {definition.antonyms.map((word, i) => (
                  <span
                    className="related"
                    key={i}
                    onClick={() => handleNew(word)}
                  >
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
          {partOfSpeech.synonyms.map((word, i) => (
            <span className="related" key={i} onClick={() => getNew(word)}>
              {word}
              {", "}
            </span>
          ))}
        </p>
      )}

      {partOfSpeech.antonyms.length !== 0 && (
        <p>
          <span>{partOfSpeech.partOfSpeech} Antonyms: </span>
          {partOfSpeech.antonyms.map((word, i) => (
            <span className="related" key={i} onClick={() => getNew(word)}>
              {word}
              {", "}
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default ActiveTab;
