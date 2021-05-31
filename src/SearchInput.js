import { useState } from 'react'
import AsyncSelect from 'react-select/async'
import './App.css';

function SearchInput({ onChange }) {
  const [inputValue, setInputValue] = useState('')

  const loadOptions = (inputValue) => {
    if (inputValue.lenght < 3) {
      return;
    }

    return fetch(
      `https://www.omdbapi.com/?s=${inputValue}&apikey=656f5a25&page=1`
    )
      .then((res) => res.json())
      .then((res) => res.Search);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  }

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      getOptionLabel={(e) => `${e.Title} ${e.Year}`}
      getOptionValue={(e) => e.imbdID}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onChange={onChange}
      // closeMenuOnSelect={false}
      isClearable
    />
  );
}

export default SearchInput;
