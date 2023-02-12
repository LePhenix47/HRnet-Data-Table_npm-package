# Documentation for HRnet Data Table

## Table of Contents

- [Documentation for HRnet Data Table](#documentation-for-hrnet-data-table)
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

HRnet Data Table is a React NPM library that provides a simple and flexible way to display data in a table format. With its support for sorting, filtering, and searching, HRnet Data Table makes it easy to work with large amounts of data in your React projects.

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
**The heads of the table will be automatically generated based on the property names of the data prop**.

By default, DataTable is set to not have scrolling enabled. To enable scrolling, you can pass the `scrollable` prop with a value of `true`. If you enable scrolling, you must also set a height in pixels using the `height` prop.


## Props

HRnet Data Table supports the following props:

* `data`: (required) An array of objects that contains the data to be displayed in the table.

* `search`: (optional) A boolean value that determines whether the table should have a search bar. The default value is `false`.

* `sort`: (optional) A boolean value that determines whether the table should be sortable. The default value is `false`.
  
* `filter`: (optional) A boolean value that determines whether the table should be filterable. The default value is `false`.
  
* `scroll`: (optional) A boolean value that determines whether the table should have scrolling. The default value is `false`.

* `height`: (required if scrollable is set to `true`) A string value representing the height of the table in pixels.

## Examples

For more examples of how to use HRnet Data Table, please refer to the HRnet Data Table GitHub repository: https://github.com/LePhenix47/HRnet-Data-Table_npm-package.



## Conclusion

HRnet Data Table provides a simple and flexible way to display data in a table format in your React projects. With its support for sorting, filtering, and searching, HRnet Data Table makes it easy to work with large amounts of data, and its props make it highly customizable to suit your needs. The table also supports scrolling for ease of use with large data sets.
