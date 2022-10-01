import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useStores } from "../../hooks/useStores";
import AccountItem from "./AccountItem";
import { observer } from "mobx-react";

const AccountList = () => {
  const { accountStore } = useStores();

  useEffect(() => {
    accountStore.getAccounts();
  }, []);

  return (
    <Box
      sx={{
        marginTop: "16px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {
        accountStore.accounts.map(
          account => <AccountItem account={account} />,
        )
      }
    </Box>
  );
};

export default observer(AccountList);
