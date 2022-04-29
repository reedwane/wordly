import useFetchNew from "hooks/useFetchNew";
import { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { getNew } = useFetchNew();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    getNew(searchTerm);
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search term"
        />
        <button onClick={(e) => handleSubmit(e)}>Seek!</button>
      </form>
    </>
  );
};

export default SearchInput;
