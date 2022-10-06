import React, { useState } from "react";
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

const CreateCategoriesModal = () => {
  const [category, setCategory] = useState("");
  const { categoriesStore } = useStores();

  const handleSubmit = () => {
    categoriesStore.createCategory(category);
    categoriesStore.closeCreateModal();
  };

  return (
    <Dialog
      open={categoriesStore.isCreateModalOpened}
      onClose={categoriesStore.closeCreateModal}
    >
      <DialogTitle>Add Category</DialogTitle>
      <DialogContent>
        <TextField
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
          fullWidth
          placeholder="Category name"
          variant="outlined"
          sx={{
            width: "540px",
          }}
        ></TextField>
        <DialogActions
          sx={{
            padding: "0px 0px 0px 8px",
          }}
        >
          <Button onClick={categoriesStore.closeCreateModal}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Category</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default observer(CreateCategoriesModal);
