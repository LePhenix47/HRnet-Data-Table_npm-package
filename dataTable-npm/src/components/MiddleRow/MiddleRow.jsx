import React from "react";

export default function MiddleRow({
  totalPaginationIndexes,
  paginationIndex,
  handleClick,
}) {
  if (typeof paginationIndex === "string") {
    paginationIndex = Number(paginationIndex);
  }
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
        className={`PaginationIndex__button`}
        type="button"
        key={paginationIndex + "MiddleRow-button-PaginationIndex-1"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {paginationIndex - 1}
      </button>
      <button
        className={`PaginationIndex__button PaginationIndex__button--active`}
        type="button"
        key={paginationIndex + "MiddleRow-button-PaginationIndex"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {paginationIndex}
      </button>
      <button
        className={`PaginationIndex__button`}
        type="button"
        key={paginationIndex + "MiddleRow-button-PaginationIndex+1"}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {paginationIndex + 1}
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
