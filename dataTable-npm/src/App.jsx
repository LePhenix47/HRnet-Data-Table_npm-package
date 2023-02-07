import DataTable from "./components/DataTable/DataTable";
import { dataMock } from "./assets/mocks/data.mock";

function App() {
  return <DataTable title="Current employees" data={dataMock} />;
}

export default App;
