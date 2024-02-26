import React from "react";
import styles from "./Search.module.css";

type SearchTypes = {
  searchData: string | null;
  setSearchData: (data: string) => void;
};
const Search = ({ setSearchData }: SearchTypes) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputField}
        type="number"
        name="search"
        placeholder="Search by user id..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
