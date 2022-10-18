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

const DeleteCategoriesModal = () => {
  const { categoriesStore } = useStores();
  const category = categoriesStore.category(categoriesStore.deleteCategoriesId);

  const deleteCategory = () => {
    categoriesStore.deleteCategory(category.id);
    categoriesStore.closeDeleteModal();
  };

  return (
    <Dialog
      open={Boolean(categoriesStore.deleteCategoriesId)}
      onClose={categoriesStore.closeDeleteModal}
    >
      <DialogTitle>Delete category</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete category?</Typography>
        <Typography>Category name: {category.name} </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={categoriesStore.closeDeleteModal}>Cancel</Button>
        <Button onClick={deleteCategory}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default observer(DeleteCategoriesModal);
