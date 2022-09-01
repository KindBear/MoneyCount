import { TransactionProvider } from "./TransactionsContext";
import TransactionsList from "./components/TransactionsList";
import Header from "./components/Header";

const App = () => {

  return (
    <TransactionProvider>
      <div>
        <Header />
        <TransactionsList />
      </div>
    </TransactionProvider>
  );
};

export default App;
