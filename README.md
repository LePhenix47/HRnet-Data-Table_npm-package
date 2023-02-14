# (WIP) Documentation for HRnet Data Table

## Table of Contents

- [(WIP) Documentation for HRnet Data Table](#wip-documentation-for-hrnet-data-table)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Creation](#creation)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
  - [Examples](#examples)
    - [Example 1: Simple Data Table](#example-1-simple-data-table)
    - [Example 2: Data Table with Search and Sorting](#example-2-data-table-with-search-and-sorting)
    - [Example 3: Data Table with Scrolling](#example-3-data-table-with-scrolling)
    - [Example 4: Data Table with all the features](#example-4-data-table-with-all-the-features)
  - [Conclusion](#conclusion)
  - [License](#license)


## Introduction

React Data Table is a React NPM library that provides a simple and flexible way to display data in a table format. With its support for sorting, and filtering, Data Table makes it easy to work with large amounts of data in your React projects.


## Features

The Data Table has the following features, matching those of its [jQuery plugin counterpart](https://github.com/DataTables/DataTablesSrc):

* Customizable Properties: You can add as many properties to the table as you need.
 
* Scrolling: You can choose to disable pagination and enable scrolling for an optimized browsing * experience.
 
* Search: You can search for a user based on their properties within the table.
 
* Sorting: The table can be sorted based on a specific property.
 
* Entries: You can select the number of entries shown in the table from an array of options.
 
* Pagination: The table can be paginated, allowing you to easily browse through the data.

## Creation

This Data Table was developed using:
- [React](https://reactjs.org/): A JavaScript library for building UIs
- [Vite.js](https://vitejs.dev/):  A fast, modular, and efficient JavaScript development setup for building modern web applications.

<a href="https://reactjs.org/" rel="nofollow"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" style="max-width: 100%;"></a><a href="https://vitejs.dev/" ><img src="https://vitejs.dev/logo-with-shadow.png" alt="Vite logo" width="36" height="36"/></a>


## Installation

To install Data Table, run the following command in your project's root directory:

```powershell
npm install @lephenix47/react-datatable
```



## Usage

Here's an example of how to use Data Table in your React components:

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

In this example, the data prop holds the data that will be displayed in the table. 

The headings for the table will be automatically generated based on the property names of the data objects.

**ℹ Note:** It is important to observe that the naming convention for the data properties must be in `camelCase` .

**⚠ Warning:** By default, the `<DataTable />` component is set to not have scrolling enabled. If you want to enable scrolling, you need to pass the scroll prop with a value of true. If you do enable scrolling, it is mandatory to also set the height of the table in pixels using the height prop.


## Props

Data Table supports the following props:


* `data`: (required) An *array of objects* that contains the data to be displayed in the table.

* `title`: (optional) A *string* value that adds a caption to the table.

* `sort`: (optional) A *boolean* value that determines whether the table should be sortable. The default value is `false`.

* `filter`: (optional) A *boolean* value that determines whether the table should be filterable. The default value is `false`.

* `scroll`: (optional) A *boolean* value that determines whether the table should have scrolling. The default value is `false`.

* `height`: (required if scroll is set to `true`) A *number* value representing the height of the table in pixels. The default value is `0`.

* `info`: (optional) A *boolean* value that controls the display of information about the data table, such as the current page and number of entries displayed. The default value is `true`.

* `lengthMenu`: (optional) An *array of numbers* that specifies the entries to be shown in the table, for example: `[5, 15, 30, 45, 75]`. The user can then select how many entries they want to see from a  drop-down menu. If no props were added it will use the default value which is `[10, 25, 50, 100]`.

* `paging`: (optional) A *boolean* value that determines whether the table should be paginated. By default, this is set to `true`, but it can be disabled by setting it to `false`. However, if scroll is enabled, paging will be automatically disabled and vice-versa.

Each of these props allows you to tailor the Data Table component to your specific needs and requirements, making it a versatile and powerful tool for working with data in your React projects.

## Examples

Let us envision the scenario where we have this data:
```javascript
const data = [
  {
    name: 'John Doe',
    job: 'Developer',
    location: 'San Francisco',
    zipCode: '00596'
  },
  {
    name: 'Jane Doe',
    job: 'Designer',
    location: 'Los Angeles',
    zipCode: '61482'
  },
  {
    name: 'Jim Smith',
    job: 'Tester',
    location: 'New York',
    zipCode: '00596'
  }
];
```

### Example 1: Simple Data Table
In this example, a simple data table is created using the <DataTable /> component and data prop:

```javascript

import DataTable from '@lephenix47/react-datatable';


function ExampleComponent () {
  return (
    <DataTable data={data} title={"US developers"}/>
  );
};

export default ExampleComponent;
```

### Example 2: Data Table with Search and Sorting
In this example, the <DataTable /> component is used to create a data table with search and sorting capabilities:

```javascript

import DataTable from '@lephenix47/react-datatable';

function ExampleComponent () {
  return (
    <DataTable data={data} sort={true} filter={true} />
  );
};

export default ExampleComponent;
```

### Example 3: Data Table with Scrolling
In this example, the <DataTable /> component is used to create a data table with scrolling capabilities:
```javascript

import DataTable from '@lephenix47/react-datatable';

function ExampleComponent () {
  return (
    <DataTable data={data} scroll height={400} />
  );
};

export default ExampleComponent;
```

### Example 4: Data Table with all the features

```javascript

import DataTable from '@lephenix47/react-datatable';


function ExampleComponent () {
  return (
    <DataTable 
      data={data} 
      title="Developers Information" 
      filter
      sort
      scroll
      height={400}
      lengthMenu={[5, 10, 15]}
      info
    />
  );
};

export default ExampleComponent;
```




## Conclusion

In conclusion, Data Table is an effective solution for displaying data in a table format within your React projects. 
Its robust features, including sorting, and filtering, make it easy to manage large amounts of data.

 Additionally, its various props offer ample customization options to fit the unique requirements of your projects. The table's support for scrolling also ensures that users can work with large data sets with ease.


## License
This project is open source under the ISC license and contributions are welcome. Whether you're looking to add new features, fix bugs, or simply improve the code, the Data Table community would be grateful for your help. Join the project today and help make Data Table the go-to data table solution for React developers.