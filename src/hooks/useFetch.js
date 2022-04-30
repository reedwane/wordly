import axios from "axios";
import { useDataContext } from "context/DataContext";
import { useLoadingContext } from "context/LoadingContext";
import { useEffectOnce } from "./useEffectOnce";

const useFetch = () => {
  let randomUrl = "https://random-words-api.vercel.app/word",
    meaningUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

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

  useEffectOnce(() => {
    (async () => {
      setLoading(true);
      setFetchError(false);

      let initial, initialDefinition;

      do {
        let random = await axios.get(randomUrl);
        let randomWord = random.data[0].word;
        console.log(randomWord);

        try {
          initial = await axios.get(`${meaningUrl}${randomWord}`);
        } catch (error) {
          continue;
        }
      } while (!initial); //loop till you get a random word that is available

      initialDefinition = initial.data[0];

      setInitialDefinition(initialDefinition);
      setLoading(false);
      setFetchError(false);

      //
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useFetch;
