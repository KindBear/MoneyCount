import React, { useContext, useState } from "react";
import { TransactionsService } from "./services/Transactions.service";
import { TransactionDto } from "./dto/Transaction.dto";
import { transactionsMock } from "./mock";

interface TransactionsContextValue {
  transactions: TransactionDto[],
  totalAmount: number,
  createNewTransaction: Function;
}

const TransactionsContext = React.createContext<TransactionsContextValue>({
  transactions: [],
  totalAmount: 0,
  createNewTransaction: () => {},
});

export const TransactionProvider = (props: any) => {
  const [service, setService] = useState(new TransactionsService(transactionsMock));

  const createNewTransaction = (options: any) => {
    service.createNewTransaction(options);
    setService(new TransactionsService(service.transactions));
  }

  return (
    <TransactionsContext.Provider value={{
      transactions: service.transactions,
      totalAmount: service.totalAmount,
      createNewTransaction,
    }}>
      {props.children}
    </TransactionsContext.Provider>
  );
}

export const useTransactionContext = () => {
  return useContext(TransactionsContext);
}
