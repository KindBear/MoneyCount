import React, { useEffect, useState } from "react";
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

const EditCategoryModal = () => {
  const { categoriesStore } = useStores();

  const [name, setName] = useState("");
  const updateCategory = () => {
    categoriesStore.updateCategory(categoriesStore.editCategoriesId, name);
    categoriesStore.closeEditModal();
  };

  useEffect(() => {
    if (categoriesStore.editCategoriesId) {
      const category = categoriesStore.category(
        categoriesStore.editCategoriesId
      );

      setName(category.name);
    }
  }, [categoriesStore.editCategoriesId]);

  return (
    <Dialog
      open={Boolean(categoriesStore.editCategoriesId)}
      onClose={categoriesStore.closeEditModal}
    >
      <DialogTitle>Edit Category</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
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
          <Button onClick={categoriesStore.closeEditModal}>Cancel</Button>
          <Button onClick={updateCategory}>Edit Category</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default observer(EditCategoryModal);
