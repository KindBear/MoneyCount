import { makeAutoObservable, runInAction } from "mobx";
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
    this.getTransactions();
  }
}

export default new TransactionsStore();

