import React from "react";
import CategoriesFilters from "../components/Categories/CategoriesFilters";
import { observer } from "mobx-react";
import CreateCategoriesModal from "../components/Categories/CreateCategoriesModal";
import CategoriesList from "../components/Categories/CategoriesList";
import DeleteCategoriesModal from "../components/Categories/DeleteCategoriesModal";
import EditCategoryModal from "../components/Categories/EditCategoryModal";

const CategoriesSettingsPage = () => {
  return (
    <>
      <CategoriesFilters />
      <CreateCategoriesModal />
      <DeleteCategoriesModal />
      <EditCategoryModal />
      <CategoriesList />
    </>
  );
};

export default observer(CategoriesSettingsPage);
