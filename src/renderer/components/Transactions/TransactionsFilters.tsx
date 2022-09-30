import React from "react";
import { Box, Button, SelectChangeEvent } from "@mui/material";
import Dropdown from "../Dropdown";
import { PERIODS } from "../../constants/periods";

type TransactionsFiltersProps = {
  onOpenModal: () => void;
  period: string;
  changePeriod: (event: SelectChangeEvent) => void;
};

const TransactionsFilters = ({ onOpenModal, period, changePeriod }: TransactionsFiltersProps) => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <Box sx={{ width: 256 }}>
        <Dropdown
          items={PERIODS}
          label="Period"
          value={period}
          onChange={changePeriod}
          placeholder="Select period"
        />
      </Box>
      <Button onClick={onOpenModal}>
        Add Transaction
      </Button>
    </Box>
  );
};

export default TransactionsFilters;
