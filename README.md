# Data table for HRnet

How to upload a library: https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe

Data Table is a jQuery plugin that is now available as a React component UI library. It provides an easy way to create dynamic, interactive tables with sorting, filtering, pagination, and other features. In order to get the most out of Data Table, a complete documentation is needed.


This documentation should include a detailed overview of the library's components, how to customize and style them, an overview of the various functionalities (sorting, filtering, pagination, etc.), and any other relevant information. Additionally, it should provide example code snippets for implementing the library into an application. Further, the documentation should include a section about supported browsers and devices and any known bugs or compatibility issues. Finally, the documentation should be updated regularly to keep pace with any new changes or updates to the library.
The documentation should provide a thorough overview of the library's components, including names and descriptions of each

## What is this library for?

This npm package allows you to create a table of data, also a requirement for the P14 of the JS-React traineeship at [OpenClassrooms.com](OpenClassrooms.com) to create a sophisticated table with all the employees by simply passing the data as a prop to the component:

```jsx
 <DataTable data={[{prop: value, prop2: value}, {...}, ...]}/>
```

## Features

This table has all the features from the [jQuery plugin counter part](https://github.com/DataTables/DataTablesSrc):

- Possible to add as many properties in the table as you want
- You can disable pagination and enable scrolling on the table
- You can search for a user in the page by their properties
- You can sort the table by a property
- You can select the amount of shown entries
- You can paginate through the table thanks to the pagination

## How was it created?

This was created with:
- [React](https://reactjs.org/)
- [Vite.js](https://vitejs.dev/)

<a href="https://reactjs.org/" rel="nofollow"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" style="max-width: 100%;"></a><a href="https://vitejs.dev/" ><img src="https://vitejs.dev/logo-with-shadow.png" alt="Vite logo" width="36" height="36"/></a>
