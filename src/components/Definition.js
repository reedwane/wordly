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
              {!newDefinition && (
                <span>
                  "Learn a new word from Wordly &#128104;&#8205;&#127979; :{" "}
                </span>
              )}
              <span>{definitionData.word}</span>
            </h3>
            <p>
              Phonetic:{" "}
              <span>
                {definitionData.phonetic
                  ? definitionData.phonetic
                  : "not available"}
              </span>
              {/* // */}
              {definitionData.phonetics.length !== 0 &&
                definitionData.phonetics[0].audio &&
                definitionData.phonetics[0].audio !== "" && (
                  <img
                    src={audio}
                    alt="audio"
                    onClick={() => play(definitionData)}
                  />
                )}
            </p>

            <h4>
              Definitions of <span>{definitionData.word} :</span>
            </h4>
          </DefinitionHeadingsWrapper>

          <DefinitionMap initialDefinition={definitionData.meanings} />
        </DefinitionWrapper>
      )}

      {fetchError && (
        <ErrorWrapper>
          Ooops! That word is not available for now &#128532; <br /> Do check
          for another VALID word, or refresh the page
        </ErrorWrapper>
      )}
    </>
  );
};

export default Definition;
