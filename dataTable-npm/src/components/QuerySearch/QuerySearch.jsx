import React from "react";
//Proptypes
import * as PropTypes from "prop-types";

export default function QuerySearch() {
  return (
    <form className="QuerySearch">
      <label htmlFor="search" className="QuerySearch__label">
        Search
        <input type="text" className="QuerySearch__input" id="search" />
        <input type="reset" className="QuerySearch__reset-button" value="×" />
      </label>
    </form>
  );
}

QuerySearch.propTypes = {};
