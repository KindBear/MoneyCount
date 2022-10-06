import React from "react";
import CategoriesFilters from "../components/Categories/CategoriesFilters";
import { observer } from "mobx-react";
import CreateCategoriesModal from "../components/Categories/CreateCategoriesModal";

const CategoriesSettingsPage = () => {
  return (
    <>
      <CategoriesFilters />
      <CreateCategoriesModal />
    </>
  );
};

export default observer(CategoriesSettingsPage);