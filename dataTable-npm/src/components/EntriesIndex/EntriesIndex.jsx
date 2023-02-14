import React from "react";
//Proptypes
import * as PropTypes from "prop-types";

export default function EntriesIndex({
  currentStartIndex,
  currentEndIndex,
  totalAmountOfEntries,
  isFiltered,
}) {
  let textToShow = isFiltered
    ? `Show ${
        currentStartIndex + 1
      } to ${currentEndIndex} of ${totalAmountOfEntries} filtered from ${totalAmountOfEntries} total entries`
    : `Show ${
        currentStartIndex + 1
      } to ${currentEndIndex} of ${totalAmountOfEntries}`;
  return !isFiltered && <div className="EntriesIndex">{textToShow}</div>;
}

EntriesIndex.propTypes = {
  currentStartIndex: PropTypes.number.isRequired,
  currentEndIndex: PropTypes.number.isRequired,
  totalAmountOfEntries: PropTypes.number.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};
