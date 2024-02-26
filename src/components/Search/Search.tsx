import React from "react";
import styles from "./Search.module.css";

type SearchTypes = {
  searchData: string | null;
  setSearchData: (data: string) => void;
};
const Search = ({ searchData, setSearchData }: SearchTypes) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
    console.log(event.target.value, "tetettee");
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputField}
        type="text"
        name="search"
        placeholder="Search by user..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
