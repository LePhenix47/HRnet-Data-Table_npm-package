import React from "react";
//Proptypes
import * as PropTypes from "prop-types";

export default function EntriesIndex({
  currentStartIndex,
  currentEndIndex,
  totalAmountOfEntries,
  filteredAmountOfEntries,
  isFiltered,
  isScrolling,
  hasPaging,
  hasInfo,
}) {
  let textToShow = "";

  const isNotFiltering = !isFiltered;

  if (isNotFiltering) {
    textToShow = !isScrolling
      ? `Show ${
          currentStartIndex + 1
        } to ${currentEndIndex} of ${totalAmountOfEntries}`
      : `Showing ${totalAmountOfEntries} entries`;
  } else {
    textToShow = !isScrolling
      ? `Show ${
          currentStartIndex + 1
        } to ${currentEndIndex} of ${filteredAmountOfEntries} (filtered from ${totalAmountOfEntries} total entries)`
      : `Showing ${filteredAmountOfEntries} entries (filtered from ${totalAmountOfEntries} total entries)`;
  }

  return (
    <div className={`EntriesIndex ${!hasInfo ? "hide" : ""}`}>{textToShow}</div>
  );
}

EntriesIndex.propTypes = {
  currentStartIndex: PropTypes.number,
  currentEndIndex: PropTypes.number,
  totalAmountOfEntries: PropTypes.number.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};
