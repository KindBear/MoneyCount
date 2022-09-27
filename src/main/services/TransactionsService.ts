import { FileService } from "./FileService";
import { onInit } from "../core/onInit";
import { service } from "../core/service";
import { CreateTransactionData, EditTransactionData, Transaction } from "../../shared/types/Transactions";

@service()
export class TransactionsService implements onInit {
  transactions: Transaction[] = [];
  fileName = "transactions.json";

  constructor(
    private fileService: FileService
  ) {
  }

  async onInit() {
    const categoriesJSON = await this.fileService.readFile(this.fileName);
    if (categoriesJSON) {
      this.transactions = JSON.parse(categoriesJSON);
    }
  }

  createTransaction(data: CreateTransactionData): Transaction {
    const newTransaction: Transaction = {
      ...data,
      id: `${this.transactions.length}_${+new Date(data.date)}`,
      categoryId: data.categoryId || null,
      subCategoryId: data.subCategoryId || null,
    };
    this.transactions.push(newTransaction);
    this.saveChanges();
    return newTransaction;
  }

  deleteTransaction(id: string): void {
    this.transactions = this.transactions.filter(transaction => transaction.id !== id);
    this.saveChanges();
  }

  updateTransaction({id, ...otherData}: EditTransactionData): Transaction {
    this.transactions = this.transactions.map(transaction => {
      if (transaction.id === id) {
        return {
          ...transaction,
          ...otherData
        };
      }

      return transaction;
    });

    this.saveChanges();
    return this.transactions.find(transaction => transaction.id === id);
  }

  saveChanges() {
    this.fileService.writeFile(this.fileName, JSON.stringify(this.transactions));
  }
}
