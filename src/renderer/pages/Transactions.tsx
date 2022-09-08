import TransactionsList from '../components/TransactionsList';
import { TransactionProvider } from '../TransactionsContext';

const Transactions = () => {
  return (
    <div>
      <TransactionProvider>
        <div>
          <TransactionsList />
        </div>
      </TransactionProvider>
    </div>
  );
};

export default Transactions;
