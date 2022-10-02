import React from "react";
import TransactionsFilters from "../components/Transactions/TransactionsFilters";
import CreateTransactionModal from "../components/Transactions/CreateTransactionModal";
import TransactionsTable from "../components/Transactions/TransactionsTable";
import DeleteTransactionModal from "../components/Transactions/DeleteTransactionModal";

const TransactionsPage = () => {
  return (
    <>
      <TransactionsFilters />
      <CreateTransactionModal />
      <DeleteTransactionModal />
      <TransactionsTable />
    </>
  );
};

export default TransactionsPage;
