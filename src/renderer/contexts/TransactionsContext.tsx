import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import { CreateTransactionData, Transaction } from "../../shared/types/Transactions";
import { createTransaction, getTransactions } from "../api/transactions";

class TransactionsStore {
  public transactions: Transaction[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public async getTransactions() {
    await getTransactions().then((value) => {
      this.transactions = value;
    });
  }

  public async createTransaction(data: CreateTransactionData) {
    await createTransaction(data).then(() => {
      this.getTransactions();
    });
  }
}

export const transactionsStoreInstance = new TransactionsStore();
const TransactionsContext = createContext<TransactionsStore>(transactionsStoreInstance);

export default TransactionsContext;

