import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Category } from "../../../shared/types/Category";
import { useStores } from "../../hooks/useStores";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton } from "@mui/material";
import EditCategory from "./EditCategory";
import { observer } from "mobx-react";

type CategoriesItemProps = {
  category: Category;
};

const CategoryItem = ({ category }: CategoriesItemProps) => {
  const { categoriesStore } = useStores();

  const [isEditCategory, setIsEditCategory] = useState(false);

  const handleDelete = () => {
    categoriesStore.openDeleteModal(category.id);
  };

  const handleEdit = () => {
    setIsEditCategory(true);
  };

  const handleCloseEdit = (): void => {
    setIsEditCategory(false);
  };

  const handleUpdateCategory = (name: string) => {
    categoriesStore.updateCategory(category.id, name);
  };

  return (
    <Accordion>
      <AccordionSummary
        sx={{
          flexDirection: "row-reverse",
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        {isEditCategory ? (
          <EditCategory
            name={category.name}
            onClose={handleCloseEdit}
            onSave={handleUpdateCategory}
          />
        ) : (
          <>
            <Typography>{category.name}</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton>
                <EditIcon onClick={handleEdit} />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </>
        )}
      </AccordionSummary>
    </Accordion>
  );
};

export default observer(CategoryItem);
