import { useDataContext } from "context/DataContext";
import { useLoadingContext } from "context/LoadingContext";
import useFetch from "hooks/useFetch";
import DefinitionMap from "./DefinitionMap";
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
          <DefinitionMap initialDefinition={initialDefinition} />
        </>
      )}
    </>
  );
};

export default Definition;
