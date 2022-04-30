import axios from "axios";
import useFetchNew from "hooks/useFetchNew";
import { useState } from "react";
import { SearchWrapper } from "styles/styledComponents/searchWrapper";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { getNew } = useFetchNew();

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);

    let autocompleteUrl = `https://api.datamuse.com/sug?s=${searchTerm}`;
    const fetch = await axios.get(autocompleteUrl);
    setSuggestions(fetch.data.slice(0, 5));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuggestions([]);
    setSearchTerm("");
    getNew(searchTerm);
  };

  const handleSuggestion = (word) => {
    setSearchTerm("");
    setSuggestions([]);
    getNew(word);
  };

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

      <ul>
        {suggestions &&
          suggestions.map((word) => (
            <li key={word.score} onClick={() => handleSuggestion(word.word)}>
              {word.word}
            </li>
          ))}
      </ul>
    </SearchWrapper>
  );
};

export default SearchInput;
