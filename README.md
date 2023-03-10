# Documentation for HRnet Data Table

## Table of Contents

- [Documentation for HRnet Data Table](#documentation-for-hrnet-data-table)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Creation](#creation)
  - [Installing the library](#installing-the-library)
    - [Requirements](#requirements)
    - [Installation](#installation)
  - [Usage](#usage)
  - [App rendering](#app-rendering)
    - [Client-Side Rendering (CSR)](#client-side-rendering-csr)
    - [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
  - [Props](#props)
  - [Examples](#examples)
    - [Example 1: Simple Data Table](#example-1-simple-data-table)
    - [Example 2: Data Table with Search and Sorting](#example-2-data-table-with-search-and-sorting)
    - [Example 3: Data Table with Scrolling](#example-3-data-table-with-scrolling)
    - [Example 4: Data Table with all the features](#example-4-data-table-with-all-the-features)
  - [Practical Demos](#practical-demos)
    - [Without style](#without-style)
    - [With style](#with-style)
  - [Styling](#styling)
    - [Default styles](#default-styles)
    - [Unused classes for customization](#unused-classes-for-customization)
  - [Known Bugs and Inconveniences](#known-bugs-and-inconveniences)
    - [Uncustomizable CSS class properties](#uncustomizable-css-class-properties)
  - [Conclusion](#conclusion)
  - [License](#license)

## Introduction

React Data Table is a React NPM library that provides a simple and flexible way to display data in a table format. With its support for sorting, and filtering, Data Table makes it easy to work with large amounts of data in your React projects.

## Features

The Data Table has the following features, matching those of its [jQuery plugin counterpart](https://github.com/DataTables/DataTablesSrc):

- Customizable Properties: You can add as many properties to the table as you need.

- Scrolling: You can choose to disable pagination and enable scrolling for an optimized browsing * experience.

- Search: You can search for a user based on their properties within the table.

- Sorting: The table can be sorted based on a specific property.

- Entries: You can select the number of entries shown in the table from an array of options.

- Pagination: The table can be paginated, allowing you to easily browse through the data.

- Automatic Responsive Design: The table has a simple responsive design that adjusts to smaller screen sizes, making it easier to browse on mobile devices.

## Creation

This Data Table was developed using:

- [React](https://reactjs.org/): A JavaScript library for building UIs
- [Vite.js](https://vitejs.dev/):  A fast, modular, and efficient JavaScript development setup for building modern web applications.

<a href="https://reactjs.org/" rel="nofollow"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" style="max-width: 100%;"></a><a href="https://vitejs.dev/" ><img src="https://vitejs.dev/logo-with-shadow.png" alt="Vite logo" width="36" height="36"/></a>

## Installing the library

### Requirements

This library requires you to have the following versions or above of Node.js and `npm` installed:

Node.js: 16.14.0

`npm`: 8.13.2

You can check the versions of these two by running the commands:

```bash
# Check the version of Node.js
node -v

# Check the version of npm
npm -v
```

If you need to update them then you can run these commands:

```bash
#  Install the latest version of Node.js
sudo n latest

# Update npm to the latest version available
sudo npm install -g npm@latest

```

### Installation

To install Data Table, run the following command in your project's root directory:

```powershell
npm install @lephenix47/react-datatable
```

## Usage

Here's an example of how to use Data Table in your React components:

```javascript
//DataTable
import { DataTable } from '@lephenix47/react-datatable';

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

**??? Warning:** By default, the `<DataTable />` component is set to not have scrolling enabled. If you want to enable scrolling, you need to pass the scroll prop with a value of true. If you do enable scrolling, it is mandatory to also set the height of the table in pixels using the height prop.

## App rendering

### Client-Side Rendering (CSR)

If you are using client-side rendering, you can directly use the library in your app. Here's an example:

```js
import { DataTable } from '@lephenix47/react-datatable';

const data = [
  {
    name: 'John Doe',
    job: 'Developer',
    location: 'San Francisco',
  },
  {
    name: 'Jane Doe',
    job: 'Designer',
    location: 'Los Angeles',
  },
];

function App() {
  return (
    <div>
      <DataTable data={data} paging info />
    </div>
  );
}

export default App;

```

### Server-Side Rendering (SSR)

If you are using server-side rendering, you will need to load the library dynamically to prevent errors that can occur during the rendering process. Here's an example of how to use the library with Next.js:

```js
import dynamic from 'next/dynamic';

const DynamicDataTable = dynamic(
  () => import('@lephenix47/react-datatable').then((module) => module.DataTable),
  { ssr: false }
);

const data = [
  {
    name: 'John Doe',
    job: 'Developer',
    location: 'San Francisco',
  },
  {
    name: 'Jane Doe',
    job: 'Designer',
    location: 'Los Angeles',
  },
];

function App() {
  return (
    <div>
      <DynamicDataTable data={data} paging info />
    </div>
  );
}

export default App;
```

If you are using Gatsby or Astro, you can follow a similar approach to load the library dynamically.

## Props

Data Table supports the following props:

- `data`: (required) An *array of objects* that contains the data to be displayed in the table.

**??? Note:** It is important that the   naming convention for the data properties are in `camelCase`.

- `title`: (optional) A *string* value that adds a caption to the table.

- `sort`: (optional) A *boolean* value that determines whether the table should be sortable. The default value is `false`.

- `filter`: (optional) A *boolean* value that determines whether the table should be filterable. The default value is `false`.

- `scroll`: (optional) A *boolean* value that determines whether the table should have scrolling. The default value is `false`.

- `height`: (required if scroll is set to `true`) A *number* value representing the height of the table in pixels. The default value is `0`.

- `info`: (optional) A *boolean* value that controls the display of information about the data table, such as the current page and number of entries displayed. The default value is `true`.

- `lengthMenu`: (optional) An *array of numbers* that specifies the entries to be shown in the table, for example: `[5, 15, 30, 45, 75]`. The user can then select how many entries they want to see from a  drop-down menu. If no props were added it will use the default value which is `[10, 25, 50, 100]`.

- `paging`: (required) A *boolean* value that determines whether the table should be paginated. By default, this is set to `true`, but it can be disabled by setting it to `false`.

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

In this example, a simple data table is created using the `<DataTable />` component with the 3 props for the table:

```javascript

import { DataTable } from '@lephenix47/react-datatable';


function ExampleComponent () {
  return (
    <DataTable data={data} title={"US developers"} paging={true}/>
  );
};

export default ExampleComponent;
```

### Example 2: Data Table with Search and Sorting

In this example, the `<DataTable />` component is used to create a data table with search and sorting capabilities:

```javascript

import { DataTable } from '@lephenix47/react-datatable';

function ExampleComponent () {
  return (
    <DataTable data={data} sort={true} filter={true} paging={true}/>
  );
};

export default ExampleComponent;
```

### Example 3: Data Table with Scrolling

In this example, the `<DataTable />` component is used to create a data table with scrolling capabilities with all the features possible:

```javascript

import { DataTable } from '@lephenix47/react-datatable';

function ExampleComponent () {
  return (
    <DataTable data={data}  
      filter
      sort
      scroll
      info
      height={400} />
  );
};

export default ExampleComponent;
```

### Example 4: Data Table with all the features

In this example, the `<DataTable />` component contains all the features possible:

```javascript

import { DataTable } from '@lephenix47/react-datatable';


function ExampleComponent () {
  return (
    <DataTable 
      data={data} 
      title="Developers Information" 
      filter
      sort
      paging
      lengthMenu={[5, 10, 15]}
      info
    />
  );
};

export default ExampleComponent;
```

**??? Note**: You can pass a boolean prop (props without a value) as shown the [example 3](#example-3-data-table-with-scrolling) and [example 4](#example-4-data-table-with-all-the-features) to make your code more concise

## Practical Demos

To view how to the datatable will work in your React application, view this website:

### Without style

- <https://lephenix47-react-datatable-demo.vercel.app/>

### With style

- <https://hrnet-p14.vercel.app/employees>

## Styling

### Default styles

Here's the full list of classes and their corresponding elements and default styles:

 `.DataTable__container`:

- Explanation: This class is applied to the container that wraps the entire data table.
- Default styling:

```scss
height: [height]px;
// If the width is < 768px
height: [height + 1000]px;
```

`.DataTable`:

- Explanation: This class is applied to the root element of a data table component and sets various layout and styling properties for the table.
- Default styling:

```css

border-collapse:collapse;
border-spacing:0;
table-layout:fixed;
width:100%;
```

`.DataTable--scroll`:

- Explanation: This class is applied to a DataTable component when the table body needs to scroll. It sets some layout and flex properties to achieve a scrollable table.
- Default styling:

```css

display:flex;
flex-direction:column;
height:100%;
width:100%;
```

`.DataTable__buttons-container`:

- Explanation: This class is applied to the container element for any buttons associated with the data table, such as the "Show Entries" and pagination buttons.
- Default styling:

```css

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:5px;
```

`.DataTable__entries-query-container`:

- Explanation: This class is applied to the container element for the "Show Entries" dropdown and the search field for filtering the table data.
- Default styling:

```css

display:flex;
justify-content:space-between;
align-items:center;
```

`.DataTable__row`:

- Explanation: This class is applied to each row in the table body and sets a default border for the row.
- Default styling:

```css
border:1px solid gray;
```

`.DataTable__head--scroll`:

- Explanation: This class is applied to the table head when the table body is scrollable. It sets some layout properties to achieve a sticky table head.
- Default styling:

```css

display:table;
table-layout:fixed;
flex:0 0 auto;
width:100%;
```

`.DataTable__head-button--active`:

- Explanation: This class is applied to the active sort button in the table head.
- Default styling:

```css

color:red;
```

`.DataTable__foot`:

- Explanation: This class is applied to the table foot element and sets some properties to position the foot element at the bottom of the table.
- Default styling:

```css
height:50px;
position:relative;
```

`.DataTable__foot--scroll`:

- Explanation: This class is applied to the table foot when the table body is scrollable. It sets some layout properties to achieve a sticky table foot.
- Default styling:

```css

display:table;
table-layout:fixed;
order:1;
```

`.DataTable__foot-row`:

- Explanation: This class is applied to the row within the table foot element.
- Default styling:

```css
height:inherit;
position:absolute;
display:flex;
width:100%;
```

`.DataTable__foot-row--scroll`:

- Explanation: This class is applied to the row within the table foot element when the table body is not scrollable. It removes the position:absolute property from .DataTable__foot-row to restore normal document flow.
- Default styling:

```css
position:initial;
```

`.DataTable__foot-cell`:

- Explanation: This class is applied to each cell in the table foot.
- Default styling:

```css
flex:1;
display:flex;
```

`.DataTable__foot-cell-entries`:

- Explanation: This class is applied to the cell within the table foot that contains the "Show Entries" dropdown.
- Default styling:

```css
justify-content:flex-start;
```

`.DataTable__foot-cell-pagination`:

- Explanation: Represents the pagination cell in the table footer that contains the pagination buttons.

- Default styling:

```css

.DataTable__foot-cell-pagination {
  justify-content: flex-end;
}
```

`.EntriesIndex`:

- Explanation This class is applied to a container element for a set of controls that allow the user to change the number of entries displayed per page in a table.
`Default styling`:

```css

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 0px;
```

`.PaginationIndex`:

- Explanation This class is applied to a container element for a set of pagination controls that allow the user to navigate between pages of a table.
- Default styling:

```css

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 0px;
```

`.PaginationIndex__button`:

- Explanation This class is applied to the pagination buttons in the pagination controls.
- Default styling:

```css

padding: 10px;
```

`.PaginationIndex__button--active`:

- Explanation This class is applied to the currently active pagination button in the pagination controls.
- Default styling:

```css

border: 1px solid red;
```

`.QuerySearch__inputs-wrapper`:

- Explanation This class is applied to a container element for the input elements of a search query form.
- Default styling:

```css

position: relative;
```

`.QuerySearch__label`:

- Explanation This class is applied to the label element of a search query input field.
- Default styling:

```css

font-size: 16px;
font-weight: 400;
```

`.QuerySearch__input`:

- Explanation This class is applied to a search query input field.
- Default styling:

```css

background-color: var(--default-input-bg-color);
```

`.QuerySearch__reset-button`:

- Explanation This class is applied to the reset button of a search query form.
- Default styling:

```css

position: absolute;
top: 43%;
right: 0px;
background-color: var(--default-reset-bg-color);
```

`.ShowEntries__label`:

- Explanation This class is applied to the label element of a "show entries" control in a table.
- Default styling:

```css
font-size: 16px;
font-weight: 400;
```

`.hide`:

- Explanation This class is used to hide an element.

- Default styling:

```css
display: none;
```

### Unused classes for customization

In addition to the classes used by the library, there are also some classes included that are not currently used but can be utilized by developers for their own styling.

??? Warning: that if you want to modify the default values of properties associated with unused classes, you need to use the `!important` keyword.

These unused classes include:

`.DataTable__caption`: This class targets the caption element that appears at the top of the table, if one is provided. Here's an example of how you could use this class to center the caption and add a background color:

```css
.DataTable__caption {
  text-align: center;
  background-color: #f0f0f0;
}
```

`.DataTable__head`: This class targets all the table header cells in the table. Here's an example of how you could use this class to add a border to the header cells:

```css
.DataTable__head {
  background-color: grey;
}
```

`.DataTable__head-cell`: This class targets all the table header cells in the table. Here's an example of how you could use this class to add a border to the header cells:

```css
.DataTable__head-cell {
  border: 1px solid black;
}
```

`.DataTable__head-row`: This class targets all the rows in the table header. Here's an example of how you could use this class to add a background color to the header row:

```css
.DataTable__head-row {
  background-color: #f0f0f0;
}
```

`.DataTable__foot`:

This class is applied to the table foot element and sets some properties to position the foot element at the bottom of the table, it's highly recommended to change the height in pixels.

- Default styling:

```css
height: 100px;
position: relative;
```

`.DataTable__foot-components-container`: This class targets the container for the components that appear in the table footer (such as the pagination component and the entries index component). Here's an example of how you could use this class to change the background color of the container:

```css

.DataTable__foot-components-container {
  background-color: #f0f0f0;
}

```

`.DataTable__foot-cell-entries--active`: This class targets the "show entries" dropdown in the table footer when it is active (i.e., the user has clicked on it). Here's an example of how you could use this class to change the background color of the dropdown when it's active:

```css
.DataTable__foot-cell-entries--active {
  background-color: #f0f0f0;
}
```

`.DataTable__foot-cell-pagination--active`: This class targets the pagination component in the table footer when it is active (i.e., the user has clicked on one of the page numbers). Here's an example of how you could use this class to change the font size of the active page number:

```css
.DataTable__foot-cell-pagination--active {
  font-size: 16px;
}
```

`.DataTable__cell`: This class targets all the cells in the table body. Here's an example of how you could use this class to change the font color of the cells:

```css
.DataTable__cell {
  color: red;
}
```

`.DataTable__body`: This class targets the body of the table, which contains the rows of data. You can use this class to customize the appearance of the table body.
You can use this class to style the body of the table:

```css
.DataTable__body {
  font-weight: normal;
  font-size: 14px;
}
```

`.DataTable__head`: This class targets the header of the table, which contains the column labels. You can use this class to customize the appearance of the table header.
This class targets the table head element in the table.
You can use this class to style the header of the table:

```css
.DataTable__head {
  background-color: #f5f5f5;
}
```

`.QuerySearch`: This class targets the search input field in the table. You can use this class to customize the appearance of the form nest the input field.
You can use this class to style the form:

```css
.QuerySearch {
  border: 1px solid #ccc;
  padding: 5px;
}
```

`.ShowEntries`: This class targets the section of the table that displays the "Show Entries" dropdown menu. You can use this class to customize the appearance of this section.
You can use this class to style the "Show entries" section:

```css
.ShowEntries {
  font-size: 14px;
  color: #777;
}
```

`.ShowEntries__select`: This class targets the "Show Entries" dropdown select element in the table. You can use this class to customize the appearance of the select element.
You can use this class to style the select input:

```css
.ShowEntries__select {
  --bg-select-options: #f5f5f5;
  background-color: var(--bg-select-options);
  border: 1px solid #ccc;
  padding: 5px;
}
```

`.ShowEntries__options`: This class targets the options in the "Show Entries" dropdown menu. You can use this class to customize the appearance of the dropdown options.
You can use this class to style the options:

```css
.ShowEntries__options {
  background-color: var(--bg-select-options);
  color: #333;
}
```

`.PaginationIndex__previous`: This class targets the "Previous" button in the pagination section of the table. You can use this class to customize the appearance of the "Previous" button.
You can use this class to customize the appearance of the "Previous" button:

```css
.PaginationIndex__previous{
 background-color: blue;
 color: white;
}
```

`.PaginationIndex__next`: This class targets the "Next" button in the pagination section of the table. You can use this class to customize the appearance of the "Next" button.
You can use this class to customize the appearance of the "Next" button:

```css
.PaginationIndex__next{
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
}
```

`PaginationIndex__first-row-buttons-container`: This class targets the container element for the first row of buttons in the pagination section of the table. You can use this class to customize the appearance of the first row of buttons. Here's an example of how you could use this class to add a margin to the top of the first row of buttons:

```css
.PaginationIndex__first-row-buttons-container {
  margin-top: 10px;
}
```

`PaginationIndex__mid-buttons-container`: This class targets the container element for the middle row of buttons in the pagination section of the table. You can use this class to customize the appearance of the middle row of buttons. Here's an example of how you could use this class to change the background color of the middle row of buttons:

```css
.PaginationIndex__mid-buttons-container {
  background-color: #e6e6e6;
}
```

`PaginationIndex__last-row-buttons-container`: This class targets the container element for the last row of buttons in the pagination section of the table. You can use this class to customize the appearance of the last row of buttons. Here's an example of how you could use this class to add a border to the last row of buttons:

```css
.PaginationIndex__last-row-buttons-container {
  border: 1px solid #999999;
}
```

## Known Bugs and Inconveniences

As with any software, this library may have some minor bugs or inconveniences that we are actively working to resolve.

### Uncustomizable CSS class properties

There are certain CSS properties within the following classes that *should* not be modified to avoid the breaking of the table layout:

```scss
//Normal table classes:
@media screen and (width <=768px) {
  .DataTable__row{
    display: flex;
    flex-direction: space-between;
    justify-content: center;
    text-align: center;
  }
}

.DataTable__foot{
   position: relative;
}

.DataTable__foot-row{
  //Inherits the height from the class above ???
  height: inherit;
  position: absolute;
  display: flex;
  width: 100%;
}

//Scrolling classes:
.DataTable--scroll{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.DataTable__head--scroll{
  display: table;
  table-layout: fixed;
  flex: 0 0 auto;
  width: 100%;
}

.DataTable__foot--scroll{
  display: table;
  table-layout: fixed;
  order: 1;
}

.DataTable__foot-row--scroll{
  position: initial;
}

//For desktops, laptops and tablets only
@media screen and (width >= 768px) {
  .DataTable__body-row--scroll{
    display: table;
    table-layout: fixed;
    width: 100%;
  }
}

```

Moreover it's not possible to set a style as props for the responsive design of the table

Though I highly recommend the use of the @container media query to change the layout of the `<table>` (once it's fully standardized and supported by browsers in the future).

We apologize for any inconvenience these issues may cause and are working hard to resolve them as quickly as possible. In the meantime, if you have any questions or concerns about these issues, please don't hesitate to reach out to our GitHub repository. Thank you for your understanding and patience.

## Conclusion

In conclusion, Data Table is an effective solution for displaying data in a table format within your React projects.
Its robust features, including sorting, and filtering, make it easy to manage large amounts of data.

 Additionally, its various props offer ample customization options to fit the unique requirements of your projects. The table's support for scrolling also ensures that users can work with large data sets with ease.

## License

This project is open source under the ISC license and contributions are welcome. Whether you're looking to add new features, fix bugs, or simply improve the code, I'd would be grateful for your help. Join the project today and help make Data Table the go-to data table solution for React developers.
