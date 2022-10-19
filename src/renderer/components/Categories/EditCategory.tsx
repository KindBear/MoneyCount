import { Box, IconButton, TextField } from "@mui/material";
import { observer } from "mobx-react";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

type EditCategoryProps = {
  name: string;
  onClose: () => void;
  onSave: (name: string) => void;
};

const EditCategory = ({ name, onClose, onSave }: EditCategoryProps) => {
  const [value, setValue] = useState(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSave = () => {
    onSave(value);
    onClose();
  };

  return (
    <>
      <TextField value={value} onChange={handleChange} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton>
          <CheckIcon onClick={handleSave} />
        </IconButton>
        <IconButton>
          <CloseIcon onClick={onClose} />
        </IconButton>
      </Box>
    </>
  );
};

export default observer(EditCategory);
