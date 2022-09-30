import React from "react";
import { useFormik } from "formik";
import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Dropdown from "../components/Dropdown";
import { TRANSACTION_TYPES } from "../constants/transactionTypes";
import { TransactionTypes } from "../../shared/types/Transactions";

export type TransactionFormValues = {
  date: Date;
  amount: number;
  type: TransactionTypes;
  // category: null,
  // subCategory: null,
  description: string | null;
};

type CreateTransactionFormProps = {
  formik: ReturnType<typeof useFormik<TransactionFormValues>>,
};

const CreateTransactionForm = ({formik}: CreateTransactionFormProps) => {
  return (
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
  );
};

export default CreateTransactionForm;
