import axios from "axios";
import { useDataContext } from "context/DataContext";
import { useLoadingContext } from "context/LoadingContext";

const useFetchNew = () => {
  const { setLoading } = useLoadingContext();
  const { setNewDefinition } = useDataContext();

  const getNew = async (searchTerm) => {
    setLoading(true);

    let meaningUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    const fetch = await axios.get(meaningUrl);
    const newDefinition = fetch.data[0];
    console.log(newDefinition);

    setNewDefinition(newDefinition);
    setLoading(false);
  };

  return { getNew };
};

export default useFetchNew;
