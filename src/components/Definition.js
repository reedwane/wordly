import { useDataContext } from "context/DataContext";
import { useLoadingContext } from "context/LoadingContext";
import useFetch from "hooks/useFetch";
import Loading from "./Loading";

const Definition = () => {
  useFetch();
  const { initialDefinition } = useDataContext();
  const { isLoading } = useLoadingContext();
  const unavailableText = "not available";
  return (
    <>
      {isLoading && <Loading />}
      {initialDefinition && (
        <>
          <h3>Learn a new word from Wordly: {initialDefinition.word}</h3>
          <p>
            Phonetic:{" "}
            <span>
              {initialDefinition.phonetic
                ? initialDefinition.phonetic
                : unavailableText}
            </span>
          </p>
          {/* <p>Audio: </p> */}

          <h4>Definitions of {initialDefinition.word}</h4>
          {initialDefinition.meanings.map((partOfSpeech) => (
            <>
              <h5>{partOfSpeech.partOfSpeech}</h5>

              <ul>
                {partOfSpeech.definitions.map((definition) => (
                  <li>
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
            </>
          ))}
        </>
      )}
    </>
  );
};

export default Definition;
