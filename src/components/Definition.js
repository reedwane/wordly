import { useDataContext } from "context/DataContext";
import { useLoadingContext } from "context/LoadingContext";
import useFetch from "hooks/useFetch";
import { DefinitionHeadingsWrapper } from "styles/styledComponents/definitionHeadings";
import { DefinitionWrapper } from "styles/styledComponents/definitionWrapper";
import DefinitionMap from "./DefinitionMap";
import Loading from "./Loading";

const Definition = () => {
  useFetch();
  const { initialDefinition, newDefinition, fetchError } = useDataContext();
  const { isLoading } = useLoadingContext();

  let definitionData;
  newDefinition
    ? (definitionData = newDefinition)
    : (definitionData = initialDefinition);

  return (
    <>
      {isLoading && <Loading />}
      {definitionData && (
        <DefinitionWrapper>
          <DefinitionHeadingsWrapper>
            <h3>
              {!newDefinition && "Learn a new word from Wordly! : "}
              <span>{definitionData.word}</span>
            </h3>
            <p>
              Phonetic:{" "}
              <span>
                {definitionData.phonetic
                  ? definitionData.phonetic
                  : "not available"}
              </span>
            </p>
            {/* <p>Audio: </p> */}
            <h4>
              Definitions of <span>{definitionData.word} :</span>
            </h4>
          </DefinitionHeadingsWrapper>

          <DefinitionMap initialDefinition={definitionData} />
        </DefinitionWrapper>
      )}

      {fetchError && <p>Please refresh or search for a new word</p>}
    </>
  );
};

export default Definition;
