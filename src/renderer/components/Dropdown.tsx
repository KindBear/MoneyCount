import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectProps, Typography } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  items: DropdownItem[];
  label?: string;
  placeholder?: string;
} & SelectProps;

const Dropdown = ({ items, label, placeholder = "Select value", ...otherProps }: DropdownProps) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        variant="outlined"
        IconComponent={KeyboardArrowDown}
        fullWidth
        label={label}
        renderValue={(value: string) => {
          if (value === "default") {
            return <Typography color="disabled">{placeholder}</Typography>;
          }
          return items.find(item => item.value === value).label;
        }}
        {...otherProps}
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
