import DataTable from "./components/DataTable/DataTable";
import { dataMock } from "./assets/mocks/data.mock";

function App() {
  return (
    <DataTable
      title="Current employees"
      data={dataMock}
      lengthMenu={[10, 25, 50, 100]}
      sort
      filter
      info
      // paging
      scroll
      // height={500}
    />
  );
}

export default App;
