//React
import React, { useState } from "react";

//Utils
import {
  getArrayObjectValues,
  getObjectProperties,
  getObjectValues,
  splitArrayStringOnUpperCase,
  log,
} from "../../utils/functions/helper-functions";

//Components
import EntriesIndex from "../EntriesIndex/EntriesIndex";
import QuerySearch from "../QuerySearch/QuerySearch";
import ShowEntries from "../ShowEntries/ShowEntries";
import PaginationIndex from "../PaginationIndex/PaginationIndex";

//Proptypes
import * as PropTypes from "prop-types";

export default function DataTable({ title, data, pagination = false }) {
  //We get the properties of the object inside the data
  let properties = getObjectProperties(data[0]);
  //We create the properties for the head
  properties = splitArrayStringOnUpperCase(properties, "titlecase", " ");
  log(properties);

  //We populate the body of the table
  let values = getArrayObjectValues(data);
  log(values);

  //We get the amount of total entries

  /**
   * Start index = ([Pagination index] - 1) × [Shown entries]
   */
  const [startIndex, setStartIndex] = useState(0);
  /**
   * End index = ([Pagination index] - 1) × [Shown entries] + [Shown entries]
   */
  const [endIndex, setEndIndex] = useState(0);
  /**
   * Total entries = data.length
   */
  const [totalEntries, setTotalEntries] = useState(0);
  /**
   * Total Pagination = [Total entries] ÷ [Entries shown]
   */
  const [totalPagination, setTotalPagination] = useState(0);
  /**
   * Entries shown = select.value
   */
  const [entriesShow, setEntriesShown] = useState(10);

  // setTotalEntries(data.length);
  log(totalEntries);

  return (
    <table className="DataTable">
      <caption className="DataTable__caption">
        {title}
        <section className="DataTable__entries-query-container">
          <ShowEntries />
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
            <EntriesIndex />
          </td>
          <td className="DataTable__cell DataTable__foot-cell DataTable__foot-cell-pagination">
            <PaginationIndex />
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
