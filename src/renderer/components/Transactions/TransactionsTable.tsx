import React, { useContext, useEffect } from "react";
import { Typography } from "@mui/material";
import { observer } from "mobx-react";
import transactionsContext from "../../contexts/TransactionsContext";

const TransactionsTable = () => {
  const transactionStore = useContext(transactionsContext);

  useEffect(() => {
    transactionStore.getTransactions();
  }, []);

  return (
    <div style={{color: "#fff"}}>
      <Typography>Transactions table coming soon</Typography>
      <Typography>Total transactions: {transactionStore.transactions.length}</Typography>
    </div>
  );
};

export default observer(TransactionsTable);
