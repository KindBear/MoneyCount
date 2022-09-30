import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import transactionsContext from "../../contexts/TransactionsContext";
import { TRANSACTION_TYPES } from "../../constants/transactionTypes";
import { TransactionTypes } from "../../../shared/types/Transactions";
import Dropdown from "../Dropdown";

type TransactionFormValues = {
  date: Date;
  amount: number;
  type: TransactionTypes;
  // category: null,
  // subCategory: null,
  description: string | null;
};

const CreateTransactionModal = () => {
  const transactionContext = useContext(transactionsContext);

  const formik = useFormik<TransactionFormValues>({
    initialValues: {
      date: null,
      amount: null,
      type: TransactionTypes.OUTCOME,
      // category: null,
      // subCategory: null,
      description: "",
    },
    onSubmit: (values) => {
      transactionContext.createTransaction(values);
      transactionContext.closeCreateModal();
    },
  });

  return (
    <Dialog
      open={transactionContext.isCreateModalOpened}
      onClose={transactionContext.closeCreateModal}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Add new transaction</DialogTitle>
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
            <DatePicker
              label="Date"
              value={formik.values.date}
              onChange={(date) => {
                formik.setFieldValue("date", date);
              }}
              renderInput={(params) => (
                <TextField
                  id="date"
                  name="date"
                  fullWidth
                  {...params}
                />
              )}
            />
            <TextField
              fullWidth
              id="amount"
              name="amount"
              label="Amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              placeholder="Enter amount"
            />
            <Dropdown
              items={TRANSACTION_TYPES}
              label="Type"
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
            />
            {/*<Dropdown */}
            {/*  items={TRANSACTION_TYPES} */}
            {/*  label="Category" */}
            {/*  name="category" */}
            {/*  value={formik.values.category}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*/>*/}
            {/*<Dropdown */}
            {/*  items={TRANSACTION_TYPES} */}
            {/*  label="Subcategory" */}
            {/*  name="subcategory" */}
            {/*  value={formik.values.subcategory}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*/>*/}
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              placeholder="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              multiline
              rows={4}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={transactionContext.closeCreateModal}>Cancel</Button>
          <Button type="submit">Add transaction</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default observer(CreateTransactionModal);
