import React from "react";
import SettingsPageTabs from "./SettingsPageTabs";
import CreateCategoriesModal from "../components/Categories/CreateCategoriesModal";

const SettingsPage = () => {
  return (
    <>
      <SettingsPageTabs />;
      <CreateCategoriesModal />
    </>
  );
};

export default SettingsPage;
