import React from "react";
import { observer } from "mobx-react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useStores } from "../../hooks/useStores";

type AccountFormValues = {
  name: "",
  balance: string,
};

const CreateTransactionModal = () => {
  const {accountStore} = useStores();

  const formik = useFormik<AccountFormValues>({
    initialValues: {
      name: "",
      balance: undefined,
    },
    onSubmit: ({name, balance}) => {
      accountStore.createAccount({
        name,
        balance: +balance,
      });
      accountStore.closeCreateModal();
    },
  });

  return (
    <Dialog
      open={accountStore.isCreateModalOpened}
      onClose={accountStore.closeCreateModal}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Add new account</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              width: "540px",
              paddingTop: "8px",
            }}
          >
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Account name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter account name"
            />
            <TextField
              fullWidth
              id="balance"
              name="balance"
              label="Balance"
              type="number"
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">UAH</InputAdornment>,
              }}
              value={formik.values.balance}
              onChange={formik.handleChange}
              placeholder="Enter balance"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={accountStore.closeCreateModal}>Cancel</Button>
          <Button type="submit">Add account</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default observer(CreateTransactionModal);
