import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useFormik } from "formik";
import CreateTransactionForm, { TransactionFormValues } from "../../forms/CreateTransactionForm";

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

  const formik = useFormik<TransactionFormValues>({
    initialValues: {
      date: null,
      amount: null,
      type: "default",
      // category: null,
      // subCategory: null,
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add new transaction</DialogTitle>
      <DialogContent>
        <CreateTransactionForm formik={formik} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Add transaction</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTransactionModal;
