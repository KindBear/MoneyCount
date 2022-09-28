import { TransactionDto } from "../dto/Transaction.dto";
import { TransactionTypes } from "../constants/TransactionTypes";

export interface NewTransactionOptions {
  amount: number;
  type: TransactionTypes;
  comment?: string;
}

export class TransactionsService {
  private _transactions: TransactionDto[] = [];

  constructor(transactions?: TransactionDto[]) {
    this._transactions = transactions || [];
  }

  public get transactions() {
    return this._transactions;
  }

  public get totalAmount() {
    let total = 0;
    this._transactions.forEach((transaction) => {
      if (transaction.type === TransactionTypes.INCOME) {
        total += transaction.amount;
      }
      if (transaction.type === TransactionTypes.OUTCOME) {
        total -= transaction.amount;
      }
    });

    return total;
  }

  public createNewTransaction = (options: NewTransactionOptions): void => {
    const transaction = {
      ...options,
      date: new Date(),
      id: `${+new Date()}`,
    };

    this._transactions = [...this._transactions, transaction];
  }
}
