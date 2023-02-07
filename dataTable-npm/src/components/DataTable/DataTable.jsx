//React
import React from "react";

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
  let totalEntries = data.length;
  log(totalEntries);

  return (
    <table className="DT">
      <caption>
        {title}
        <div>
          <ShowEntries />
          <QuerySearch />
        </div>
      </caption>
      <thead>
        <tr>
          {properties.map((property, index) => {
            return (
              <td key={properties + index}>
                {property}
                <div>
                  <button type="button">↑</button>
                  <button type="button">↓</button>
                </div>
              </td>
            );
          })}
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td>
            <EntriesIndex />
          </td>
          <td>
            <PaginationIndex />
          </td>
        </tr>
      </tfoot>
      <tbody>
        {values.map((valueArray) => {
          return (
            <tr>
              {valueArray.map((value, index) => {
                return <td key={value + index}>{value}</td>;
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
