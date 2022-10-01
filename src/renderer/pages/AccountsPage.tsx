import React from "react";
import AccountsFilters from "../components/Accounts/AccountsFilters";
import CreateAccountModal from "../components/Accounts/CreateAccountModal";
import AccountList from "../components/Accounts/AccountList";

const AccountsPage = () => {
  return (
    <>
      <AccountsFilters />
      <CreateAccountModal />
      <AccountList />
    </>
  );
};

export default AccountsPage;
