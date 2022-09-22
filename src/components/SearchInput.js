import axios from "axios";
import useFetchNew from "hooks/useFetchNew";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { SearchWrapper } from "styles/styledComponents/searchWrapper";
import { useDebounce } from "usehooks-ts";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const debouncedValue = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (searchTerm !== "") {
      (async () => {
        let autocompleteUrl = `https://api.datamuse.com/sug?s=${debouncedValue}`;
        const fetch = await axios.get(autocompleteUrl);
        setSuggestions(fetch.data.slice(0, 5));
      })();
    }
    // eslint-disable-next-line
  }, [debouncedValue]);

  const suggestionsRef = useRef(null);

  const { getNew } = useFetchNew();

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);
  };

  const closeSuggestions = () => {
    setSuggestions(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm !== "") {
      getNew(searchTerm);
      setSearchTerm("");
      closeSuggestions();
    }
  };

  const handleSuggestion = (word) => {
    setSearchTerm("");
    closeSuggestions();
    getNew(word);
  };

  useOnClickOutside(suggestionsRef, closeSuggestions);

  return (
    <SearchWrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search term"
        />
        <button onClick={(e) => handleSubmit(e)}>Seek!</button>
      </form>

      <ul ref={suggestionsRef}>
        {suggestions &&
          suggestions.map((word, i) => (
            <li key={i} onClick={() => handleSuggestion(word.word)}>
              {word.word}
            </li>
          ))}
      </ul>
    </SearchWrapper>
  );
};

export default SearchInput;
