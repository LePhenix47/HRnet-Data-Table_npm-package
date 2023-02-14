# (WIP) Documentation for HRnet Data Table

## Table of Contents

- [(WIP) Documentation for HRnet Data Table](#wip-documentation-for-hrnet-data-table)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [How it was created](#how-it-was-created)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
  - [Examples](#examples)
  - [Conclusion](#conclusion)


## Introduction

HRnet Data Table is a React NPM library that provides a simple and flexible way to display data in a table format. With its support for sorting, and filtering, HRnet Data Table makes it easy to work with large amounts of data in your React projects.

## Features

This table has all the features from the [jQuery plugin counter part](https://github.com/DataTables/DataTablesSrc):

* Possible to add as many properties in the table as you want
* You can disable pagination and enable scrolling on the table
* You can search for a user in the page by their properties
* You can sort the table by a property
* You can select the amount of shown entries
* You can paginate through the table thanks to the pagination

## How it was created

This was created with:
- [React](https://reactjs.org/)
- [Vite.js](https://vitejs.dev/)

<a href="https://reactjs.org/" rel="nofollow"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" style="max-width: 100%;"></a><a href="https://vitejs.dev/" ><img src="https://vitejs.dev/logo-with-shadow.png" alt="Vite logo" width="36" height="36"/></a>


## Installation

To install HRnet Data Table, run the following command in your project's root directory:

```powershell
npm install @lephenix47/react-datatable
```




## Usage

Here's an example of how to use HRnet Data Table in your React components:

```javascript
//DataTable
import DataTable from '@lephenix47/react-datatable';

const data = [
  {
    name: 'John Doe',
    job: 'Developer',
    location: 'San Francisco'
  },
  {
    name: 'Jane Doe',
    job: 'Designer',
    location: 'Los Angeles'
  },
  ...
];

function ExampleComponent () {
  return (
    <DataTable data={data} />
  );
};

export default ExampleComponent;
```

In this example, the `data` prop contains the data that will be displayed in the table.

ℹ **The heads of the table will be automatically generated based on the property names of the data prop**.

⚠ The naming convention of the data properties **must** be set in `camelCase` ⚠ 

By default, DataTable is set to not have scrolling enabled. To enable scrolling, you can pass the `scrollable` prop with a value of `true`. If you enable scrolling, you must also set a height in pixels using the `height` prop.


## Props

HRnet Data Table supports the following props:


* `data`: (required) An array of objects that contains the data to be displayed in the table.

* `title`: (optional) A string value that adds a caption to the table.

* `sort`: (optional) A boolean value that determines whether the table should be sortable. The default value is `false`.

* `filter`: (optional) A boolean value that determines whether the table should be filterable. The default value is `false`.

* `scroll`: (optional) A boolean value that determines whether the table should have scrolling. The default value is `false`.

* `height`: (required if scroll is set to true) A number value representing the height of the table in pixels.

* `info`: (optional) A boolean value that controls the display of information about the data table, * such as the current page and number of entries displayed. The default value is true.

* `lengthMenu`: (optional) An array of numbers that specifies the entries to be shown in the table, for example: `[10, 25, 50, 100]`. The user can then select how many entries they want to see from a  drop-down menu. If no props were added it will use the default value which is `[10, 25, 50, 100]`.

* `paging`: (optional) A boolean value that determines whether the table should be paginated. By default, this is set to `true`, but it can be disabled by setting it to `false`. However, if scroll is enabled, paging will be automatically disabled and vice-versa.

Each of these props allows you to tailor the HRnet Data Table component to your specific needs and requirements, making it a versatile and powerful tool for working with data in your React projects.

## Examples

For more examples of how to use HRnet Data Table, please refer to the HRnet Data Table GitHub repository: https://github.com/LePhenix47/HRnet-Data-Table_npm-package.



## Conclusion

In conclusion, HRnet Data Table is an effective solution for displaying data in a table format within your React projects. 
Its robust features, including sorting, and filtering, make it easy to manage large amounts of data.

 Additionally, its various props offer ample customization options to fit the unique requirements of your projects. The table's support for scrolling also ensures that users can work with large data sets with ease.

This project is open source under the ISC license and contributions are welcome. Whether you're looking to add new features, fix bugs, or simply improve the code, the HRnet Data Table community would be grateful for your help. Join the project today and help make HRnet Data Table the go-to data table solution for React developers.