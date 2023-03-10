//React
import React from "react";

//Proptypes
import * as PropTypes from "prop-types";

export default function ShowEntries({
  setEntriesShown,
  lengthMenu,
  isScrolling,
  hasPaging,
}) {
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
    <div className={`ShowEntries ${!hasPaging || isScrolling ? "hide" : ""}`}>
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
          {lengthMenu &&
            lengthMenu.map((number, index) => {
              return (
                <option
                  value={`${number}`}
                  key={`${number}-${index}`}
                  className="ShowEntries__option"
                >
                  {number}
                </option>
              );
            })}
        </select>
        entries
      </label>
    </div>
  );
}

ShowEntries.propTypes = {
  setEntriesShown: PropTypes.func.isRequired,
};
