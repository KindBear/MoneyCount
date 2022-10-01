import React from "react";
import TransactionStore from "./TransactionsStore";
import AccountsStore from "./AccountsStore";

export const StoresContext = React.createContext({
  transactionStore: TransactionStore,
  accountStore: AccountsStore,
});
