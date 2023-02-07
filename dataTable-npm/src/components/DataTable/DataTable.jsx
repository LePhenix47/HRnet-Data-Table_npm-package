//React
import React from "react";

//Utils
import {
  formatText,
  getObjectProperties,
  getObjectValues,
  splitArrayStringOnUpperCase,
  log,
} from "../../utils/functions/helper-functions";

/**
 * Data table with all the features from the jQuery counter part
 *
 * @param {boolean} pagination Boolean to know whether to enable/disable pagination and disable/enable scrolling, set to `false` by default
 *
 * @param {string} title Title for the caption of the table
 *
 * @param {{...property: value}[]} data Array of objects containing all the properties for the `<thead>` along with their values for the `<tbody>`
 *
 * ⚠ **Must use the camelCase naming convention for the properties** ⚠
 * ex:
 * ```js
 * data = [
 * {
 *  firstName: "Younes",
 *  lastName: "Lahouiti"
 * },
 * {
 *  firstName: "Walter",
 *  lastName: "White"
 * }
 *  ]
 *  //Will have the properties "Firstname" and "Lastname" in the <thead>
 * //Will show the 2 rows with "Younes Lahouiti" and "Walter White" in the <tbody>
 * ```
 *
 * @returns The table as a JSX element
 */

export default function DataTable({ title, data, pagination = false }) {
  //We get the properties of the object inside the data
  let properties = getObjectProperties(data[0]);
  //We create the proerties for the head
  properties = splitArrayStringOnUpperCase(properties, "titlecase", " ");
  log(properties);

  return (
    <table className="data-table-component">
      <caption>
        {title} <div></div>
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
      <tfoot></tfoot>
      <tbody></tbody>
    </table>
  );
}
