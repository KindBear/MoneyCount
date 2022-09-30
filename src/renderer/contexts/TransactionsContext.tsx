import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import { CreateTransactionData, Transaction } from "../../shared/types/Transactions";
import { createTransaction, getTransactions } from "../api/transactions";

class TransactionsStore {
  public transactions: Transaction[] = [];
  public isCreateModalOpened: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public openCreateModal = () => {
    this.isCreateModalOpened = true;
  }

  public closeCreateModal = () => {
    this.isCreateModalOpened = false;
  }

  public async getTransactions() {
    const transactions = await getTransactions();

    runInAction(() => {
      this.transactions = transactions;
    });
  }

  public async createTransaction(data: CreateTransactionData) {
    await createTransaction(data);

    runInAction(() => {
      this.getTransactions();
    });
  }
}

export const transactionsStoreInstance = new TransactionsStore();
const TransactionsContext = createContext<TransactionsStore>(transactionsStoreInstance);

export default TransactionsContext;

