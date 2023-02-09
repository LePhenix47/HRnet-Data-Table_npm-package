//React
import React from "react";

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
}) {
  /**
   */
  const showAllPaginationButtons = totalPaginationIndexes <= 7;
  log({ totalPaginationIndexes, showAllPaginationButtons });

  let paginationArray;

  if (showAllPaginationButtons) {
    paginationArray = createArrayOfNumbers(2, totalPaginationIndexes);
    log({ paginationArray });
  }

  return (
    <div className="PaginationIndex">
      <button type="button" className="PaginationIndex__previous">
        ← Previous
      </button>
      <button className="PaginationIndex__button" type="button">
        1
      </button>

      {showAllPaginationButtons &&
        paginationArray.map((number) => {
          return (
            <button
              className="PaginationIndex__button"
              type="button"
              key={number + "buttonPaginationIndex"}
            >
              {number}
            </button>
          );
        })}
      {/* 
      <button className="PaginationIndex__button" type="button">
        2
      </button>
      <button className="PaginationIndex__button" type="button">
        3
      </button>
      <button className="PaginationIndex__button" type="button">
        4
      </button>
      <button className="PaginationIndex__button" type="button">
        5
      </button> */}
      {!showAllPaginationButtons && (
        <button className="PaginationIndex__button" type="button">
          ...
        </button>
      )}
      <button className="PaginationIndex__button" type="button">
        {totalPaginationIndexes}
      </button>
      <button type="button" className="PaginationIndex__next">
        Next →
      </button>
    </div>
  );
}

PaginationIndex.propTypes = {};
