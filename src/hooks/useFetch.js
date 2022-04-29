import axios from "axios";
import { useDataContext } from "context/DataContext";
import { useLoadingContext } from "context/LoadingContext";
import { useEffect } from "react";

const useFetch = () => {
  let randomUrl = "https://random-words-api.vercel.app/word",
    meaningUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  // ,autocompleteUrl = "https://api.datamuse.com/sug?s=<word>";

  const { setLoading } = useLoadingContext();
  const { setInitialDefinition, setFetchError } = useDataContext();

  //   const getNew = async () => {
  //     try {
  //       const random = await axios.get(randomUrl);
  //       const randomWord = random.data[0].word;

  //       const initial = await axios.get(`${meaningUrl}${randomWord}`);
  //       const initialDefinition = initial.data[0];

  //       return initialDefinition;
  //       //
  //     } catch (error) {
  //       getNew();
  //     }
  //   };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setFetchError(false);

        const random = await axios.get(randomUrl);
        const randomWord = random.data[0].word;

        const initial = await axios.get(`${meaningUrl}${randomWord}`);
        if (initial.status !== 200) {
          const err = new Error("Word searched not available");
          err.response = initial.response;
          throw err;
        }
        const initialDefinition = initial.data[0];

        setInitialDefinition(initialDefinition);
        setLoading(false);
        setFetchError(false);

        //
      } catch (error) {
        setLoading(false);
        setInitialDefinition(false);
        setFetchError(true);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useFetch;
