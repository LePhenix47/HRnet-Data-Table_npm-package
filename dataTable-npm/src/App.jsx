import DataTable from "./components/DataTable/DataTable";
import { dataMock } from "./assets/mocks/data.mock";

function App() {
  return (
    <>
      {/* <DataTable
        title="Current employees (paging)"
        data={dataMock}
        lengthMenu={[10, 25, 50, 100]}
        sort
        filter
        info
        paging
      /> */}
      <DataTable
        title="Current employees (scroll)"
        data={dataMock}
        lengthMenu={[10, 25, 50, 100]}
        sort
        filter
        info
        scroll
        height={380}
      />
    </>
  );
}

export default App;
