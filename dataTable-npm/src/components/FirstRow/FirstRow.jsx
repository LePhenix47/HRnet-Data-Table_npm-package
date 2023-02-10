import React from "react";

export default function FirstRow({
  totalPaginationIndex,
  paginationIndex,
  handleClick,
}) {
  return (
    <div>
      <button
        className={`PaginationIndex__button ${
          paginationIndex === 2 ? "PaginationIndex__button--active" : ""
        }`}
        type="button"
        key={2 + "FirstRow-button-PaginationIndex"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        2
      </button>
      <button
        className={`PaginationIndex__button ${
          paginationIndex === 3 ? "PaginationIndex__button--active" : ""
        }`}
        type="button"
        key={3 + "FirstRow-button-PaginationIndex"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        3
      </button>
      <button
        className={`PaginationIndex__button ${
          paginationIndex === 4 ? "PaginationIndex__button--active" : ""
        }`}
        type="button"
        key={4 + "FirstRow-button-PaginationIndex"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        4
      </button>
      <button
        className={`PaginationIndex__button ${
          paginationIndex === 5 ? "PaginationIndex__button--active" : ""
        }`}
        type="button"
        key={5 + "FirstRow-button-PaginationIndex"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        5
      </button>
      <button
        className={`PaginationIndex__button `}
        type="button"
        disabled={true}
      >
        ...
      </button>
    </div>
  );
}
