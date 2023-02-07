import DataTable from "../components/DataTable/DataTable";
import { dataMock } from "../assets/mocks/data.mock";

export default { title: "DataTable", component: DataTable };

const Template = (args) => {
  return <DataTable {...args} />;
};

export function DataTableStory() {
  return Template.bind({});
}

DataTableStory.args = {
  data: dataMock,
  title: "test",
  pagination: false,
};

// export const DataTableStory = {
//   data: dataMock,
//   title: "test",
//   pagination: false,
// };
