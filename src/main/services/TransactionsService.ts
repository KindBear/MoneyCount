import { v4 as uuidv4 } from "uuid";
import { FileService } from "./FileService";
import { OnInit } from "../core/onInit";
import { service } from "../core/service";
import {
  CreateTransactionData,
  EditTransactionData,
  Transaction,
} from "../../shared/types/Transactions";
import { Observable } from "../core/Observable";
import { AccountService } from "./AccountService";

@service()
export class TransactionsService implements OnInit {
  private _transactions = new Observable<Transaction[]>([]);
  private fileName = "transactions.json";

  constructor(
    private fileService: FileService,
    private accountService: AccountService,
  ) {
  }

  public get transactions(): Transaction[] {
    return this._transactions.value;
  }

  public async onInit() {
    const categoriesJSON = await this.fileService.readFile(this.fileName);
    if (categoriesJSON) {
      this._transactions.value = JSON.parse(categoriesJSON);
    }
    this._transactions.subscribe((value) => {
      this.fileService.writeFile(this.fileName, JSON.stringify(value));
    });
  }

  public createTransaction(data: CreateTransactionData): Transaction {
    const newTransaction: Transaction = {
      ...data,
      id: uuidv4(),
      categoryId: data.categoryId || null,
      subCategoryId: data.subCategoryId || null,
    };
    this._transactions.value = [...this._transactions.value, newTransaction];

    this.accountService.changeBalance(data.accountId, data.type, data.amount);

    return newTransaction;
  }

  public deleteTransaction(id: string): void {
    this._transactions.value = this._transactions.value.filter(transaction => transaction.id !== id);
  }

  public updateTransaction({ id, ...otherData }: EditTransactionData): Transaction {
    this._transactions.value = this._transactions.value.map(transaction => {
      if (transaction.id === id) {
        return {
          ...transaction,
          ...otherData,
        };
      }

      return transaction;
    });

    return this._transactions.value.find(transaction => transaction.id === id);
  }
}
