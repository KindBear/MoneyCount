import React from "react";
import { Dialog, DialogTitle } from "@mui/material";
import NewTransactionForm from "./NewTransactionForm";

interface NewTransactionDialogProps {
  open: boolean;
  onClose: () => void;
}

const NewTransactionDialog = ({
  open,
  onClose,
                              }: NewTransactionDialogProps) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Create new transactions</DialogTitle>
      <NewTransactionForm onSubmit={onClose}/>
    </Dialog>
  );
};

export default NewTransactionDialog;
