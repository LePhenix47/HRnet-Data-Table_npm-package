//React
import React, { useRef, useState } from "react";

//Proptypes
import * as PropTypes from "prop-types";

//Utils
import { log } from "../../utils/functions/helper-functions";

export default function ShowEntries({ setEntriesShown }) {
  /**
   * Function that gets the value of the `<select>` on change and sends it to its parent component
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} event
   */
  function handleSubmit(event) {
    //We get the value of the <select>`as a string and we transform it as a number
    const valueOfSelect = Number(event.currentTarget.value);
    setEntriesShown(valueOfSelect);
  }

  return (
    <div className="ShowEntries">
      <label htmlFor="show-entries" className="ShowEntries__label">
        Show
        <select
          name="show-entries"
          id="show-entries"
          className="ShowEntries__select"
          onChange={(e) => {
            handleSubmit(e);
          }}
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
