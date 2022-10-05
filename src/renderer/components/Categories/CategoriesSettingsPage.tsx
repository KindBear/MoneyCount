import React from "react";
import { Box, Button, TextField } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react";
import CreateCategoriesModal from "./CreateCategoriesModal";

const CategoriesSettingsPage = () => {
  const { categoriesStore } = useStores();
  return (
    <>
      <Box
        sx={{
          height: "48px",
          paddingLeft: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          label="Search category"
          placeholder="Search category"
          variant="outlined"
          sx={{
            width: "256px",
          }}
          InputProps={{
            endAdornment: <SearchSharpIcon fontSize="medium" />,
          }}
        ></TextField>
        <Box
          sx={{
            minWidth: "333px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onClick={categoriesStore.openCreateModal}>
            Add Category
          </Button>
          <Button>Add SubCategory</Button>
        </Box>
      </Box>
      <CreateCategoriesModal />
    </>
  );
};

export default observer(CategoriesSettingsPage);
