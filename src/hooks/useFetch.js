import axios from "axios";
import { useEffect } from "react";

const useFetch = () => {
  let randomUrl = "https://random-words-api.vercel.app/word",
    meanigUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/beat",
    autocompleteUrl = "https://api.datamuse.com/sug?s=<word>";

  useEffect(() => {
    try {
      (async () => {
        const random = await axios.get(randomUrl);
        console.log(random);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default useFetch;
