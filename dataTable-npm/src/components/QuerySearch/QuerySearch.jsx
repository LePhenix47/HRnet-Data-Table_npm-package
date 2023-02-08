import React from "react";
//Proptypes
import * as PropTypes from "prop-types";

export default function QuerySearch() {
  return (
    <div className="QuerySearch">
      <label htmlFor="search" className="QuerySearch__label">
        Search
        <input type="text" className="QuerySearch__input" />
        <button
          type="reset"
          htmlFor="search"
          className="QuerySearch__reset-button"
        >
          (x)
        </button>
      </label>
    </div>
  );
}

QuerySearch.propTypes = {};
