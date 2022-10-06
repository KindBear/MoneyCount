import React from "react";
import TransactionStore from "./TransactionsStore";
import AccountsStore from "./AccountsStore";
import CategoriesStore from "./CategoriesStore";

export const StoresContext = React.createContext({
  transactionStore: TransactionStore,
  accountStore: AccountsStore,
  categoriesStore: CategoriesStore,
});
