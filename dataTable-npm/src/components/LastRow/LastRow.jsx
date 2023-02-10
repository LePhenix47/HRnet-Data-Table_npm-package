import React from "react";

export default function LastRow({
  totalPaginationIndexes,
  paginationIndex,
  handleClick,
}) {
  return (
    <div>
      <button
        className={`PaginationIndex__button `}
        type="button"
        disabled={true}
      >
        ...
      </button>

      <button
        className={`PaginationIndex__button ${
          paginationIndex === totalPaginationIndexes - 4
            ? "PaginationIndex__button--active"
            : ""
        }`}
        type="button"
        key={totalPaginationIndexes - 4 + "LastRow-button-PaginationIndex"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {totalPaginationIndexes - 4}
      </button>
      <button
        className={`PaginationIndex__button ${
          paginationIndex === totalPaginationIndexes - 3
            ? "PaginationIndex__button--active"
            : ""
        }`}
        type="button"
        key={totalPaginationIndexes - 3 + "LastRow-button-PaginationIndex"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {totalPaginationIndexes - 3}
      </button>
      <button
        className={`PaginationIndex__button ${
          paginationIndex === totalPaginationIndexes - 2
            ? "PaginationIndex__button--active"
            : ""
        }`}
        type="button"
        key={totalPaginationIndexes - 2 + "LastRow-button-PaginationIndex"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {totalPaginationIndexes - 2}
      </button>
      <button
        className={`PaginationIndex__button ${
          paginationIndex === totalPaginationIndexes - 1
            ? "PaginationIndex__button--active"
            : ""
        }`}
        type="button"
        key={totalPaginationIndexes - 1 + "LastRow-button-PaginationIndex"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {totalPaginationIndexes - 1}
      </button>
    </div>
  );
}
