import DataTable from "./components/DataTable/DataTable";
import { dataMock } from "./assets/mocks/data.mock";

function App() {
  return (
    <DataTable
      title="Current employees"
      data={dataMock}
      sort
      filter
      info
      lengthMenu={[10, 20, 30]}
      paging
    />
  );
}

export default App;
