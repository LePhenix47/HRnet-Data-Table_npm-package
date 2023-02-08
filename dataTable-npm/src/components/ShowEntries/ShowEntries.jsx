import React from "react";
//Proptypes
import * as PropTypes from "prop-types";

export default function ShowEntries() {
  return (
    <div className="ShowEntries">
      <label htmlFor="show-entries" className="ShowEntries__label">
        Show
        <select
          name="show-entries"
          id="show-entries"
          className="ShowEntries__select"
        >
          <option value="10" className="ShowEntries__option">
            10
          </option>
          <option value="25" className="ShowEntries__option">
            25
          </option>
          <option value="50" className="ShowEntries__option">
            50
          </option>
          <option value="100" className="ShowEntries__option">
            100
          </option>
        </select>
        entries
      </label>
    </div>
  );
}

ShowEntries.propTypes = {};
