import React from "react";

/**
 * Data table with all the features from the jQuery counter part
 *
 * @param {boolean} pagination Boolean to know whether to enable/disable pagination and disable/enable scrolling, set to `false` by default
 *
 * @param {string} title Title for the caption of the table
 *
 * @param {{...property: value}[]} data Array of objects containig all the properties for the `<thead>` along with their values for the `<tbody>`
 *
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
  return (
    <tbody className="data-table-component">
      <caption>{title}</caption>
      <thead></thead>
      <tfoot></tfoot>
      <tbody></tbody>
    </tbody>
  );
}
