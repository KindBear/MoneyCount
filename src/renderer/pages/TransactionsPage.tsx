import React from 'react';
import TransactionsList from '../components/TransactionsList';
import { TransactionProvider } from 'renderer/TransactionsContext';

const TransactionsPage = () => {
  return (
    <div>
      <TransactionProvider>
        <TransactionsList />
      </TransactionProvider>
    </div>
  );
};

export default TransactionsPage;
