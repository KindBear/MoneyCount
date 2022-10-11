import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Category } from "../../../shared/types/Category";
import { useStores } from "../../hooks/useStores";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton } from "@mui/material";

type CategoriesItemProps = {
  category: Category;
};

const CategoryItem = ({ category }: CategoriesItemProps) => {
  const { categoriesStore } = useStores();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    categoriesStore.openDeleteModal(category.id);
  };
  return (
    <Accordion>
      <AccordionSummary
        sx={{
          flexDirection: "row-reverse",
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{category.name}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </AccordionSummary>
    </Accordion>
  );
};

export default CategoryItem;
