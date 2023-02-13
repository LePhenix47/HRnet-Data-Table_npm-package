import React from "react";
//Proptypes
import * as PropTypes from "prop-types";

export default function QuerySearch({ setQueryInputted }) {
  return (
    <form className="QuerySearch">
      <label htmlFor="search" className="QuerySearch__label">
        Search
        <input
          type="text"
          className="QuerySearch__input"
          id="search"
          onInput={(e) => {
            setQueryInputted(e.target.value);
          }}
        />
        <input type="reset" className="QuerySearch__reset-button" value="×" />
      </label>
    </form>
  );
}

QuerySearch.propTypes = {};
