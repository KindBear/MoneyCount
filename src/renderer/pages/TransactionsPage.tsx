import React from "react";
import TransactionsFilters from "../components/Transactions/TransactionsFilters";
import CreateTransactionModal from "../components/Transactions/CreateTransactionModal";
import TransactionsTable from "../components/Transactions/TransactionsTable";

const TransactionsPage = () => {
  return (
    <>
      <TransactionsFilters />
      <CreateTransactionModal />
      <TransactionsTable />
    </>
  );
};

export default TransactionsPage;
