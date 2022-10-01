import React from "react";
import TransactionStore from "./TransactionsStore";

export const StoresContext = React.createContext({
  transactionStore: TransactionStore,
});
