import { useDataContext } from "context/DataContext";
import { useLoadingContext } from "context/LoadingContext";
import useFetch from "hooks/useFetch";
import DefinitionMap from "./DefinitionMap";
import Loading from "./Loading";

const Definition = () => {
  useFetch();
  const { initialDefinition, newDefinition } = useDataContext();
  const { isLoading } = useLoadingContext();

  let definitionData;
  newDefinition
    ? (definitionData = newDefinition)
    : (definitionData = initialDefinition);

  return (
    <>
      {isLoading && <Loading />}
      {definitionData && (
        <>
          <h3>Learn a new word from Wordly: {definitionData.word}</h3>
          <p>
            Phonetic:{" "}
            <span>
              {definitionData.phonetic
                ? definitionData.phonetic
                : "not available"}
            </span>
          </p>
          {/* <p>Audio: </p> */}

          <h4>Definitions of {definitionData.word}</h4>
          <DefinitionMap initialDefinition={definitionData} />
        </>
      )}
    </>
  );
};

export default Definition;
