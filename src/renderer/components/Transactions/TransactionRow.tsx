import React from "react";
import { Transaction } from "../../../shared/types/Transactions";
import { IconButton, Menu, MenuItem, TableCell, TableRow } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useStores } from "../../hooks/useStores";

type TransactionRowProps = {
  transaction: Transaction;
};

const TransactionRow = ({transaction}: TransactionRowProps) => {
  const {transactionStore, accountStore} = useStores();
  const account = accountStore.account(transaction.accountId);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    transactionStore.openDeleteModal(transaction.id);
  };

  return (
    <>
      <TableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>{new Date(+transaction.date).toLocaleDateString()}</TableCell>
        <TableCell>{transaction.amount}</TableCell>
        <TableCell>{account.name}</TableCell>
        <TableCell>{transaction.type}</TableCell>
        <TableCell>{transaction.comment}</TableCell>
        <TableCell
          align="right"
          sx={{
            width: "40px",
          }}
        >
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default TransactionRow;
