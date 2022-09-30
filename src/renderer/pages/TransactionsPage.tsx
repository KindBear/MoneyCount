import React, { useState } from "react";
import TransactionsFilters from "../components/Transactions/TransactionsFilters";
import CreateTransactionModal from "../components/Transactions/CreateTransactionModal";
import { SelectChangeEvent } from "@mui/material";
import TransactionsTable from "../components/Transactions/TransactionsTable";

const TransactionsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>("default");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changePeriod = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  return (
    <>
      <TransactionsFilters
        onOpenModal={openModal}
        period={period}
        changePeriod={changePeriod}
      />
      <CreateTransactionModal open={isModalOpen} onClose={closeModal} />
      <TransactionsTable />
    </>
  );
};

export default TransactionsPage;
