import React from "react";
import { Box, Button } from "@mui/material";
import { useStores } from "../../hooks/useStores";

const AccountsFilters = () => {
  const {accountStore} = useStores();

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    }}>
      <Button onClick={accountStore.openCreateModal}>
        Add Account
      </Button>
    </Box>
  );
};

export default AccountsFilters;
