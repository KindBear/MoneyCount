import { makeAutoObservable, runInAction } from "mobx";
import { CreateTransactionData, Transaction } from "../../shared/types/Transactions";
import { createTransaction, deleteTransaction, getTransactions } from "../api/transactions";
import accountStore from "./AccountsStore";

class TransactionsStore {
  public transactions: Transaction[] = [];
  public isCreateModalOpened: boolean = false;
  public deleteTransactionId: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public openCreateModal = () => {
    this.isCreateModalOpened = true;
  };

  public closeCreateModal = () => {
    this.isCreateModalOpened = false;
  };

  public openDeleteModal = (id: string) => {
    this.deleteTransactionId = id;
  }

  public closeDeleteModal = () => {
    this.deleteTransactionId = null;
  }

  public transaction(id: string): Transaction {
    if (id) {
      return this.transactions.find(item => item.id === id);
    } else {
      return {} as Transaction;
    }
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
    accountStore.getAccounts();
  }

  public async deleteTransaction(id: string) {
    await deleteTransaction(id);

    this.getTransactions();
  }
}

export default new TransactionsStore();

