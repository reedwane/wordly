import { useDataContext } from "context/DataContext";
import { useLoadingContext } from "context/LoadingContext";
import useFetch from "hooks/useFetch";
import { DefinitionHeadingsWrapper } from "styles/styledComponents/definitionHeadings";
import { DefinitionWrapper } from "styles/styledComponents/definitionWrapper";
import { ErrorWrapper } from "styles/styledComponents/errorWrapper";
import DefinitionMap from "./DefinitionMap";
import Loading from "./Loading";
import audio from "assets/audio.png";

const Definition = () => {
  useFetch();
  const { initialDefinition, newDefinition, fetchError } = useDataContext();
  const { isLoading } = useLoadingContext();

  let definitionData;
  newDefinition
    ? (definitionData = newDefinition)
    : (definitionData = initialDefinition);

  const play = (definitionData) => {
    let audio = new Audio(definitionData.phonetics[0].audio);
    audio.play();
  };

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
              {definitionData.phonetics[0].audio &&
                definitionData.phonetics[0].audio !== "" && (
                  <img src={audio} onClick={() => play(definitionData)} />
                )}
            </p>
            {/* <p>Audio: </p> */}
            <h4>
              Definitions of <span>{definitionData.word} :</span>
            </h4>
          </DefinitionHeadingsWrapper>

          <DefinitionMap initialDefinition={definitionData} />
        </DefinitionWrapper>
      )}

      {fetchError && (
        <ErrorWrapper>Please refresh or search for a new word</ErrorWrapper>
      )}
    </>
  );
};

export default Definition;
