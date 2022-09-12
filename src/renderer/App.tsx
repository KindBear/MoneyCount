import { TransactionProvider } from "./TransactionsContext";
import TransactionsList from "./components/TransactionsList";
import Header from "./components/Header";
import styled from '@emotion/styled'

const AppContainer = styled.div(({theme}: any) => ({
    backgroundColor: theme.palette.primary.main,
  }))

const App = () => {
  return (
    <TransactionProvider>
      <AppContainer>
        <Header />
        <TransactionsList />
      </AppContainer>
    </TransactionProvider>
  );
};

export default App;
