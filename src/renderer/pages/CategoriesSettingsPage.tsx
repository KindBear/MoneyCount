import React from "react";
import { Button, TextField, Box, MenuItem, IconButton } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const CategoriesSettingsPage = () => {
  return (
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
        <Button>Add Category</Button>
        <Button>Add SubCategory</Button>
      </Box>
    </Box>
  );
};

export default CategoriesSettingsPage;
