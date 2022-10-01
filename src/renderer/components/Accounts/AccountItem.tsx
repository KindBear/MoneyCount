import React from "react";
import { Card, Typography } from "@mui/material";
import { Account } from "../../../shared/types/Account";

type AccountItemProps = {
  account: Account;
};

const AccountItem = ({ account }: AccountItemProps) => {
  return (
    <Card variant="outlined" sx={{
      width: "400px",
      height: "250px",
      margin: "8px",
      padding: "16px",
    }}>
      <Typography
        variant="h4"
      >
        {account.name}
      </Typography>
      <Typography
        align="right"
        variant="h5"
        color={account.balance > 0 ? "positive" : "negative"}
      >
        {account.balance} UAH
      </Typography>
    </Card>
  );
};

export default AccountItem;
