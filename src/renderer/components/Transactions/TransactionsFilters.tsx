import React from "react";
import { Button } from "@mui/material";
import { Periods } from "../../../shared/types/Periods";
import Dropdown from "../Dropdown";
import { FlexContainer } from "../StyleMui/FlexContainer";

const TransactionsFilters = () => {
  // TODO: move periods someone else
  const periods = [
    { label: "This Month", value: Periods.THIS_MONTH },
    { label: "Last Month", value: Periods.LAST_MONTH },
    { label: "This Quarter", value: Periods.THIS_QUARTER },
    { label: "Last Quarter", value: Periods.LAST_QUARTER },
    { label: "This Year", value: Periods.THIS_YEAR },
    { label: "Custom", value: Periods.CUSTOM },
  ];

  return (
    <FlexContainer
      direction="row"
      justify="space-between"
      padding="8px"
    >
      <Dropdown items={periods} label="Period" />
      <Button variant="contained" color="primary">
        Add Transaction
      </Button>
    </FlexContainer>
  );
};

export default TransactionsFilters;
