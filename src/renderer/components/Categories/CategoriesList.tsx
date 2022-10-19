import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react";
import CategoryItem from "./CategoryItem";

const CategoriesList = () => {
  const { categoriesStore } = useStores();

  useEffect(() => {
    categoriesStore.getCategories();
  }, []);

  return (
    <Box>
      {categoriesStore.categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </Box>
  );
};

export default observer(CategoriesList);
