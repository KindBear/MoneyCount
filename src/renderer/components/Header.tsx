import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useTransactionContext } from "../TransactionsContext";
import NewTransactionDialog from "./NewTransactionDialog";
import { useState } from "react";

const Header = () => {
  const { totalAmount } = useTransactionContext();
  const [transactionDialogOpen, setTransactionDialogOpen] = useState(false);

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setTransactionDialogOpen(true);
          }}
        >
          New Transaction
        </Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          align="right"
        >
          Balance: ${totalAmount}
        </Typography>
      </Toolbar>
    </AppBar>
      <NewTransactionDialog open={transactionDialogOpen} onClose={() => {
        setTransactionDialogOpen(false);
      }} />
    </>
  );
};

export default Header;
