import React from "react";
import {
  Box,
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
  const { categoriesStore } = useStores();

  return (
    <Dialog
      open={categoriesStore.isCreateModalOpened}
      onClose={categoriesStore.closeCreateModal}
    >
      <DialogTitle
        sx={{
          padding: "16px 24px 8px",
        }}
      >
        Add Category
      </DialogTitle>
      <DialogContent
        sx={{
          padding: "0px 16px 0px 16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            width: "540px",
          }}
        >
          <TextField
            fullWidth
            placeholder="Category name"
            variant="outlined"
          ></TextField>
          <DialogActions
            sx={{
              padding: "8px 0px 8px 0px",
            }}
          >
            <Button onClick={categoriesStore.closeCreateModal}>Cancel</Button>
            <Button type="submit">Add Category</Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default observer(CreateCategoriesModal);
