import React, { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTransactionContext } from "../TransactionsContext";
import { TransactionTypes } from "../constants/TransactionTypes";

interface NewTransactionFormProps {
  onSubmit?: () => void;
}

const NewTransactionForm = ({ onSubmit }: NewTransactionFormProps) => {
  const transactions = useTransactionContext();
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (type: TransactionTypes) => () => {
    transactions.createNewTransaction({
      amount,
      comment,
      type,
    });
    if (onSubmit) {
      onSubmit();
      setAmount(0);
      setComment("");
    }
  };

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value);
  };

  const handleChangeComment = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "start",
    }}>
      <TextField
        label="Amount"
        onChange={handleChangeAmount}
        value={amount}
      />
      <TextField
        label="Comment"
        onChange={handleChangeComment}
        value={comment}
      />
      <div>
        <Button
          onClick={handleSubmit(TransactionTypes.INCOME)}
          color="success"
          variant="contained"
        >
          Income
        </Button>
        <Button
          onClick={handleSubmit(TransactionTypes.OUTCOME)}
          color="error"
          variant="contained"
        >
          Outcome
        </Button>
      </div>
    </div>
  );
};

export default NewTransactionForm;
