import React, { useContext } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useFormik } from "formik";
import CreateTransactionForm, { TransactionFormValues } from "../../forms/CreateTransactionForm";
import transactionsContext from "../../contexts/TransactionsContext";
import { TransactionTypes } from "../../../shared/types/Transactions";

type CreateTransactionModalProps = {
  open: boolean;
  onClose: () => void;
  // onSubmit: () => void;
};

const CreateTransactionModal = ({
  open,
  onClose,
  // onSubmit,
                                }: CreateTransactionModalProps) => {
  const transactionStore = useContext(transactionsContext);

  const formik = useFormik<TransactionFormValues>({
    initialValues: {
      date: null,
      amount: null,
      type: TransactionTypes.OUTCOME,
      // category: null,
      // subCategory: null,
      description: "",
    },
    onSubmit: () => {},
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add new transaction</DialogTitle>
      <DialogContent>
        <CreateTransactionForm formik={formik} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => {
          transactionStore.createTransaction(formik.values);
          onClose();
        }}>Add transaction</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTransactionModal;
