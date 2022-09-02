import { TransactionProvider } from "./TransactionsContext";
import TransactionsList from "./components/TransactionsList";
import Header from "./components/Header";


import styled from '@emotion/styled'


const App = ({ className }: any) => {
  return (
    
     <TransactionProvider>
      <div className={className}>
        <Header />
        <TransactionsList />
      </div>
    </TransactionProvider>
   
  
  );
};

export default styled(App)(({theme}) => {
  return {backgroundColor: theme.palette?.secondary.main || "#fff"};
});



