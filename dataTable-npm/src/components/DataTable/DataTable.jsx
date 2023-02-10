//React
import React, { useEffect, useState } from "react";

//Utils
import {
  getArrayObjectValues,
  getObjectProperties,
  getObjectValues,
  splitArrayStringOnUpperCase,
  log,
  deepCopy,
} from "../../utils/functions/helper-functions";

//Components
import EntriesIndex from "../EntriesIndex/EntriesIndex";
import QuerySearch from "../QuerySearch/QuerySearch";
import ShowEntries from "../ShowEntries/ShowEntries";
import PaginationIndex from "../PaginationIndex/PaginationIndex";

//Proptypes
import * as PropTypes from "prop-types";

export default function DataTable({ title, data, pagination = false }) {
  //We get the amount of total entries

  /**
   * Total Pagination = [Total entries] ÷ [Entries shown]
   */
  const [totalPagination, setTotalPagination] = useState(0);
  /**
   * Pagination Index set by the user, default by one, mathematical interval: [1, totalPagination]
   */
  const [paginationIndex, setPaginationIndex] = useState(1);
  /**
   * Entries shown = Number(select.value)
   */
  const [entriesShown, setEntriesShown] = useState(10);

  /**
   * Object containing the starting index and the ending index
   */
  let [usefulIndexes, setUsefulIndexes] = useState({});

  let [values, setValues] = useState([]);

  //We get the properties of the object inside the data
  let properties = getObjectProperties(data[0]);
  //We create the properties for the head
  properties = splitArrayStringOnUpperCase(properties, "titlecase", " ");
  // log(properties);

  //We populate the body of the table
  /**
   * Amount of data
   */
  const totalEntries = data.length;
  log({ totalEntries });

  /**
   * Total pagination indexes for the table
   */
  /**
   * ```powershell
   * Total Pagination = [Total entries] ÷ [Entries shown]
   * Rounded to the ceiling
   * ```
   */
  let totalPaginationIndexes = Math.ceil(totalEntries / entriesShown);

  if (paginationIndex > totalEntries) {
    log("OVERFLOW DETECTED!");
  }
  /**
   *
   */
  let dataToShow = deepCopy(data);
  let filteredDataToShow = [];
  let startingIndex = 0;
  let endingIndex = 0;

  /**
   * Function that gets the value of the `<select>` element inside the `<ShowEntries />` component
   */
  useEffect(() => {
    /**
     * Cases to take in account:
     *
     */

    showEntriesToBody();
  }, [entriesShown, paginationIndex]);

  function showEntriesToBody() {
    setStartAndEndIndex();

    //Set the inndex to send them to the <EntriesIndex /> component
    setUsefulIndexes({ startingIndex, endingIndex });

    //We reset the data inside the <tbody> to avoid pileups
    resetDataToShow();

    //We create the data that must be shown
    for (let i = startingIndex; i < endingIndex; i++) {
      const item = data[i];
      dataToShow.push(item);
    }

    //We re-render the component with the new values for the body
    setValues(getArrayObjectValues(dataToShow));
  }

  function setStartAndEndIndex() {
    //We get the starting and ending index
    startingIndex = (paginationIndex - 1) * entriesShown;
    const indexUnderflows = startingIndex < 0;
    if (indexUnderflows) {
      startingIndex = 0;
    }

    endingIndex = startingIndex + entriesShown;

    //We check if the end index overflows
    const indexOverflowsArray = endingIndex > totalEntries;
    if (indexOverflowsArray) {
      endingIndex = totalEntries;
    }
  }

  /**
   * Function that sets the `dataToShow` variable containing the table rows to show as an empty array
   */
  function resetDataToShow() {
    dataToShow = [];
  }

  return (
    <table className="DataTable">
      <caption className="DataTable__caption">
        {title}
        <section className="DataTable__entries-query-container">
          <ShowEntries setEntriesShown={setEntriesShown} />
          <QuerySearch />
        </section>
      </caption>
      <thead className="DataTable__head">
        <tr className="DataTable__row DataTable__head-row">
          {properties.map((property, index) => {
            return (
              <td
                key={properties + index}
                className="DataTable__cell DataTable__head-cell"
              >
                {property}
                <div>
                  <button type="button" className="DataTable__head-button">
                    ↑
                  </button>
                  <button type="button" className="DataTable__head-button">
                    ↓
                  </button>
                </div>
              </td>
            );
          })}
        </tr>
      </thead>
      <tfoot className="DataTable__foot">
        <tr className="DataTable__row DataTable__foot-row">
          <td className="DataTable__cell DataTable__foot-cell DataTable__foot-cell-entries">
            <EntriesIndex
              totalAmountOfEntries={totalEntries}
              currentStartIndex={usefulIndexes.startingIndex}
              currentEndIndex={usefulIndexes.endingIndex}
            />
          </td>
          <td className="DataTable__cell DataTable__foot-cell DataTable__foot-cell-pagination">
            <PaginationIndex
              totalPaginationIndexes={totalPaginationIndexes}
              setCurrentPaginationIndex={setPaginationIndex}
              currentPaginationIndex={paginationIndex}
            />
          </td>
        </tr>
      </tfoot>
      <tbody className="DataTable__body">
        {values.map((valueArray, index) => {
          return (
            <tr
              className="DataTable__row DataTable__body-row"
              key={valueArray.toString() + index}
            >
              {valueArray.map((value, index) => {
                return (
                  <td
                    key={value + index}
                    className="DataTable__cell DataTable__body-cell"
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

//Adding types to the props of the JS component
DataTable.propTypes = {
  title: PropTypes.string,
  pagination: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
};
