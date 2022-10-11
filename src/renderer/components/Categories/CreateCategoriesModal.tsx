import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react";
import { useFormik } from "formik";

type CategoriesFormValues = {
  name: "";
};

const CreateCategoriesModal = () => {
  const { categoriesStore } = useStores();

  const formik = useFormik<CategoriesFormValues>({
    initialValues: {
      name: "",
      // subCategory: null,
    },
    onSubmit: ({ name }) => {
      categoriesStore.createCategory(name);
      categoriesStore.closeCreateModal();
    },
  });

  return (
    <Dialog
      open={categoriesStore.isCreateModalOpened}
      onClose={categoriesStore.closeCreateModal}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Category name"
            variant="outlined"
            sx={{
              width: "540px",
            }}
          />
          <DialogActions
            sx={{
              padding: "0px 0px 0px 8px",
            }}
          >
            <Button onClick={categoriesStore.closeCreateModal}>Cancel</Button>
            <Button type="submit">Add Category</Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default observer(CreateCategoriesModal);
