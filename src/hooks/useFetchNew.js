import axios from "axios";
import { useDataContext } from "context/DataContext";
import { useLoadingContext } from "context/LoadingContext";

const useFetchNew = () => {
  const { setLoading } = useLoadingContext();
  const { setNewDefinition, setFetchError, setInitialDefinition } =
    useDataContext();

  const getNew = async (searchTerm) => {
    try {
      let meaningUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
      setLoading(true);
      setFetchError(false);

      const fetch = await axios.get(meaningUrl);
      if (fetch.status !== 200) {
        const err = new Error("Word searched not available");
        err.response = fetch.response;
        throw err;
      }
      const newDefinition = fetch.data[0];

      setNewDefinition(newDefinition);
      window.scrollTo({
        //scroll to top
        top: 10,
        left: 100,
        behavior: "smooth",
      });
      setLoading(false);
      //
    } catch (error) {
      setNewDefinition(null);
      setInitialDefinition(null);
      setLoading(false);
      setFetchError(true);
    }
  };

  return { getNew };
};

export default useFetchNew;
