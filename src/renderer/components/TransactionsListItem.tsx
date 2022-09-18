import React from 'react';
import { TransactionDto } from "../dto/Transaction.dto";

interface TransactionsListItemProps {
  item: TransactionDto
}

const TransactionsListItem = ({item}: TransactionsListItemProps) => {
  return (
    <div>
      <div>{item.date.toLocaleDateString()}</div>
      <div>{item.amount}</div>
      <div>{item.comment}</div>
    </div>
  );
};

export default TransactionsListItem;
