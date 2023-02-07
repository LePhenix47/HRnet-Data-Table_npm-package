import React from "react";

/**
 * Data table with all the features from the jQuery counter part
 *
 * @param {{...property: value}[]} data Array of objects containig all the properties for the `<thead>` along with their values for the `<tbody>`
 *
 * @returns The table as a JSX element
 */
export default function DataTable({ data }) {
  return (
    <tbody>
      <thead></thead>
      <tfoot></tfoot>
      <tbody></tbody>
    </tbody>
  );
}
