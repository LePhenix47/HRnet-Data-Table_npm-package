import React from "react";
//Proptypes
import * as PropTypes from "prop-types";

export default function QuerySearch({
  setQueryInputted,
  setNeedsFiltering,
  hasFilter,
}) {
  return (
    <form className="QuerySearch">
      <div className="QuerySearch__inputs-wrapper">
        <label htmlFor="search" className="QuerySearch__label">
          Search
          <input
            type="text"
            className="QuerySearch__input"
            id="search"
            onInput={(e) => {
              //We get the value of the input without any whitespace
              const valueOfInput = e.target.value.trim();

              //We verify if the input isn't empty to avoid pointless re-renders
              const isNotEmpty = !!valueOfInput.length;
              if (isNotEmpty) {
                setQueryInputted(e.target.value);
                setNeedsFiltering(true);
              } else {
                setQueryInputted("");
                setNeedsFiltering(false);
              }
            }}
          />
        </label>
        <input
          type="reset"
          className="QuerySearch__reset-button"
          value="×"
          onClick={() => {
            setQueryInputted("");
            setNeedsFiltering(false);
          }}
        />
      </div>
    </form>
  );
}

QuerySearch.propTypes = {
  setQueryInputted: PropTypes.func.isRequired,
  setNeedsFiltering: PropTypes.func.isRequired,
};
