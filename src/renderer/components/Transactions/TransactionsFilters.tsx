import React, { useState } from "react";
import { Box, Button, SelectChangeEvent } from "@mui/material";
import Dropdown from "../Dropdown";
import { PERIODS } from "../../constants/periods";
import { useStores } from "../../hooks/useStores";

const TransactionsFilters = () => {
  const [period, setPeriod] = useState<string>("default");
  const {transactionStore} = useStores();

  const changePeriod = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

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
      <Button onClick={transactionStore.openCreateModal}>
        Add Transaction
      </Button>
    </Box>
  );
};

export default TransactionsFilters;
