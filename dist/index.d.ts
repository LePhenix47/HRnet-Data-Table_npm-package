import * as React from "react";

declare module "@lephenix47/react-datatable" {
  export interface DataTableProps {
    data: Array<object>;
    title?: string;
    sort?: boolean;
    filter?: boolean;
    scroll?: boolean;
    height?: string | number;
    info?: boolean;
    lengthMenu?: Array<number>;
    paging: boolean;
  }

  export default function DataTable(props: DataTableProps): React.ReactElement;
}
