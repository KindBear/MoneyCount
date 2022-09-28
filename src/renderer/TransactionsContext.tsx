import React, { ReactNode, useContext, useState } from "react";
import { NewTransactionOptions, TransactionsService } from "./services/Transactions.service";
import { TransactionDto } from "./dto/Transaction.dto";
import { transactionsMock } from "./mock";

interface TransactionsContextValue {
  transactions: TransactionDto[];
  totalAmount: number;
  createNewTransaction: (options: NewTransactionOptions) => void;
}

const TransactionsContext = React.createContext<TransactionsContextValue>({
  transactions: [],
  totalAmount: 0,
  createNewTransaction: () => null,
});

export const TransactionProvider: React.FC<{children: ReactNode}> = (props) => {
  const [service, setService] = useState(new TransactionsService(transactionsMock));

  const createNewTransaction = (options: NewTransactionOptions) => {
    service.createNewTransaction(options);
    setService(new TransactionsService(service.transactions));
  };

  return (
    <TransactionsContext.Provider value={{
      transactions: service.transactions,
      totalAmount: service.totalAmount,
      createNewTransaction,
    }}>
      {props.children}
    </TransactionsContext.Provider>
  );
};

export const useTransactionContext = () => {
  return useContext(TransactionsContext);
};
