# Data table for HRnet

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

This was created with React with the framework [Vite.js](https://vitejs.dev/) for the structure of the component and [Storybook](https://storybook.js.org/) to test the UI of the React component
