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
}) {
  let textOfEntriesIndex = !isScrolling
    ? `Show ${
        currentStartIndex + 1
      } to ${currentEndIndex} of ${totalAmountOfEntries}`
    : `Showing ${totalAmountOfEntries} entries`;

  let textToShow = isFiltered
    ? `Show ${
        currentStartIndex + 1
      } to ${currentEndIndex} of ${filteredAmountOfEntries} (filtered from ${totalAmountOfEntries} total entries)`
    : `${textOfEntriesIndex}`;
  return <div className="EntriesIndex">{textToShow}</div>;
}

EntriesIndex.propTypes = {
  currentStartIndex: PropTypes.number.isRequired,
  currentEndIndex: PropTypes.number.isRequired,
  totalAmountOfEntries: PropTypes.number.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};
