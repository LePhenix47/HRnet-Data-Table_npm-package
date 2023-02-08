import React from "react";
//Proptypes
import * as PropTypes from "prop-types";

export default function PaginationIndex() {
  return (
    <div className="PaginationIndex">
      <button type="button" className="PaginationIndex__previous">
        Previous
      </button>
      <button className="PaginationIndex__button" type="button">
        1
      </button>
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
      </button>
      <button className="PaginationIndex__button" type="button">
        ...
      </button>
      <button className="PaginationIndex__button" type="button">
        [TotLengthPaginations-1]
      </button>
      <button type="button" className="PaginationIndex__next">
        Next
      </button>
    </div>
  );
}

PaginationIndex.propTypes = {};
