import React from "react";
import CategoriesFilters from "../components/Categories/CategoriesFilters";
import { observer } from "mobx-react";
import CreateCategoriesModal from "../components/Categories/CreateCategoriesModal";
import CategoriesList from "../components/Categories/CategoriesList";
import DeleteCategoriesModal from "../components/Categories/DeleteCategoriesModal";

const CategoriesSettingsPage = () => {
  return (
    <>
      <CategoriesFilters />
      <CreateCategoriesModal />
      <DeleteCategoriesModal />
      <CategoriesList />
    </>
  );
};

export default observer(CategoriesSettingsPage);
