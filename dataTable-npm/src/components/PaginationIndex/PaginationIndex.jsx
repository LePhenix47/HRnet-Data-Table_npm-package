//React
import React, { useState } from "react";

//Proptypes
import * as PropTypes from "prop-types";

//Utils
import {
  log,
  createArrayOfNumbers,
} from "../../utils/functions/helper-functions";

export default function PaginationIndex({
  totalPaginationIndexes,
  setCurrentPaginationIndex,
  currentPaginationIndex,
}) {
  /**
   * Boolean constant to check if the component should render
   *
   * ```powershell
   * [Total Pagination Index] =< 7
   * ```
   */
  const showAllPaginationButtons = totalPaginationIndexes <= 7;

  /**
   * Boolean constant to check if the component should show the first 5 buttons like this:
   *
   * ```powershell
   * 1 2 3 4 5 … [TPI]
   * ```
   */
  const showFirstRowThenTotal = currentPaginationIndex < 5;

  /**
   * Boolean constant to check if the component should show the first , and last the other likes this:
   *
   * ```powershell
   * 1 … [PI - 1] [PI] [PI + 1] … [TPI]
   * ```
   */
  const showMiddle =
    currentPaginationIndex >= 5 &&
    currentPaginationIndex < totalPaginationIndexes - 4;

  /**
   *  Boolean constant to check if the component should show the last 5 buttons like this:
   *
   * ```powershell
   * 1 … [TPI - 4] [TPI - 3] [TPI - 2] [TPI - 1] [TPI]
   * ```
   */
  const showFirstThenLastRow =
    currentPaginationIndex > totalPaginationIndexes - 4;

  /**
   * Array to fill in automically all the 7 buttons
   *
   */
  let underSevenPaginationArray = createArrayOfNumbers(
    2,
    totalPaginationIndexes
  );

  let fivePaginationPage = createArrayOfNumbers(2, 6);

  if (showAllPaginationButtons) {
    log("Is under 7");
  }

  /**
   *Function that sets the pagination index
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  function handleClick(event) {
    const valueOfButton = Number(event.target.innerText);

    const buttonIsNotANumber = isNaN(valueOfButton);

    if (buttonIsNotANumber) {
      let previousOrNextValue = event.target.innerText.includes("Next")
        ? 1
        : -1;
      log("Button is not a number:", event.target, { previousOrNextValue });

      setCurrentPaginationIndex(currentPaginationIndex + previousOrNextValue);
      return;
    }

    setCurrentPaginationIndex(valueOfButton);
  }

  /**
   * Removes all the `"PaginationIndex__button--active"` classes from the buttons row
   */

  return (
    <div className="PaginationIndex">
      <button
        type="button"
        className="PaginationIndex__previous"
        onClick={(e) => {
          handleClick(e);
        }}
        disabled={currentPaginationIndex === 1}
      >
        ← Previous
      </button>
      <button
        className={`PaginationIndex__button ${
          currentPaginationIndex === 1 ? "PaginationIndex__button--active" : ""
        }`}
        type="button"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        1
      </button>

      {/* If Total pagination index <= 7 */}
      {showAllPaginationButtons &&
        underSevenPaginationArray.map((number) => {
          return (
            <button
              className={`PaginationIndex__button ${
                currentPaginationIndex === number
                  ? "PaginationIndex__button--active"
                  : ""
              }`}
              type="button"
              key={number + "buttonPaginationIndex"}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {number}
            </button>
          );
        })}

      {/* 
      If Total pagination index > 7 
      Need to add 3 aditional conditions: 
      1  - If PI < 5 → Should show: 1 2 3 4 5 … [TPI]
      2  - If PI >= 5 && PI <= TPI - 4 → Should show: 1 … [PI - 1] [PI] [PI + 1] … [TPI]
      3  - If PI > TPI - 4 → Should show: 1 … [TPI - 4] [TPI - 3] [TPI - 2] [TPI - 1] [TPI]

      */}
      {!showAllPaginationButtons &&
        showFirstRowThenTotal &&
        fivePaginationPage.map((number) => {
          return (
            <button
              className={`PaginationIndex__button ${
                currentPaginationIndex === number
                  ? "PaginationIndex__button--active"
                  : ""
              }`}
              type="button"
              key={number + "buttonPaginationIndex"}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {number}
            </button>
          );
        }) && (
          <button
            className={`PaginationIndex__button `}
            type="button"
            onClick={(e) => {
              handleClick(e);
            }}
            disabled={true}
          >
            ...
          </button>
        )}
      {!showAllPaginationButtons && showMiddle}
      {!showAllPaginationButtons && showFirstThenLastRow}

      <button
        className={`PaginationIndex__button ${
          currentPaginationIndex === totalPaginationIndexes
            ? "PaginationIndex__button--active"
            : ""
        }`}
        type="button"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {totalPaginationIndexes}
      </button>
      <button
        type="button"
        className="PaginationIndex__next"
        onClick={(e) => {
          handleClick(e);
        }}
        disabled={currentPaginationIndex === totalPaginationIndexes}
      >
        Next →
      </button>
    </div>
  );
}

PaginationIndex.propTypes = {};
