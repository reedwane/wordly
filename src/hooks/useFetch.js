import axios from "axios";
import { useDataContext } from "context/DataContext";
import { useLoadingContext } from "context/LoadingContext";
import { useEffect } from "react";

const useFetch = () => {
  let randomUrl = "https://random-words-api.vercel.app/word",
    meaningUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  // ,autocompleteUrl = "https://api.datamuse.com/sug?s=<word>";

  const { setLoading } = useLoadingContext();
  const { setInitialDefinition } = useDataContext();

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);
        const random = await axios.get(randomUrl);
        const randomWord = random.data[0].word;

        const initial = await axios.get(`${meaningUrl}${randomWord}`);
        const initialDefinition = initial.data;

        setInitialDefinition(initialDefinition);
        setLoading(false);

        //
      })();
    } catch (error) {
      console.log(error);
    }
  });
};

export default useFetch;
