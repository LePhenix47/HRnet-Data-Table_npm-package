import React from "react";
//Proptypes
import * as PropTypes from "prop-types";

export default function EntriesIndex({
  currentStartIndex,
  currentEndIndex,
  totalAmountOfEntries,
  isFiltered,
}) {
  return (
    <div className="EntriesIndex">
      Show {currentStartIndex + 1} to {currentEndIndex} of{" "}
      {totalAmountOfEntries}
    </div>
  );
}

EntriesIndex.propTypes = {};
