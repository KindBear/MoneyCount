import React from "react";
import { observer } from "mobx-react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useStores } from "../../hooks/useStores";

const DeleteTransactionModal = () => {
  const { transactionStore, accountStore } = useStores();
  const transaction = transactionStore.transaction(
    transactionStore.deleteTransactionId
  );
  const account = accountStore.account(transaction.accountId);

  const deleteTransaction = () => {
    transactionStore.deleteTransaction(transaction.id);
    transactionStore.closeDeleteModal();
  };

  return (
    <Dialog
      open={Boolean(transactionStore.deleteTransactionId)}
      onClose={transactionStore.closeDeleteModal}
    >
      <DialogTitle>Delete transaction</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete transaction?</Typography>
        <Typography>Account name: {account.name}</Typography>
        <Typography>
          Date: {new Date(+transaction.date).toLocaleDateString()}
        </Typography>
        <Typography>Amount: {transaction.amount} UAH</Typography>
        <Typography>Type: {transaction.type}</Typography>
        {/*<Typography>categoryId: </Typography>*/}
        {/*<Typography>subCategoryId: </Typography>*/}
        <Typography>Description: {transaction.comment}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={transactionStore.closeDeleteModal}>Cancel</Button>
        <Button onClick={deleteTransaction}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default observer(DeleteTransactionModal);
