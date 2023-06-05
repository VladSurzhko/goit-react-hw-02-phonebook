import React from "react";
import css from "../Phonebook/phonestyle.module.css";

const Filter = ({ filter, onFilterChange }) => {
  return (
    <label className={css.findContact} htmlFor="filterInput">
      Find contacts by name:
      <input
        className={css.lastInput}
        id="filterInput"
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

export default Filter;