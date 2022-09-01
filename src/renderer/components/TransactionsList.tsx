import { useTransactionContext } from "../TransactionsContext";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 300 },
  { field: 'amount', headerName: 'Amount', type: 'number'},
  { field: 'comment', headerName: 'Comment'},
  { field: 'type', headerName: 'Type'},
];

const TransactionsList = () => {
  const transactions = useTransactionContext();

  const rows = [...transactions.transactions];

  return (
    <div>
      <DataGrid
        rows={rows}
        autoHeight
        columns={columns}
      />
    </div>
  );
};

export default TransactionsList;
