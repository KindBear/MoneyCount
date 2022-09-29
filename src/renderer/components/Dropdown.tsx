import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  items: DropdownItem[];
  label: string;
};

const Dropdown = ({ items, label }: DropdownProps) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        variant="outlined"
        IconComponent={KeyboardArrowDown}
        label="Period"
      >
        {items.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
