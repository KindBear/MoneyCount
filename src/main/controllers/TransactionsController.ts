import { controller } from "../core/controller";
import { channel } from "../core/channel";
import { TransactionsService } from "../services/TransactionsService";
import {
  CreateTransactionData,
  DeleteTransactionData,
  EditTransactionData,
  Transaction
} from "../../shared/types/Transactions";

@controller("transactions/")
export class TransactionsController {

  constructor(
    private transactionService: TransactionsService
  ) {
  }

  @channel("get")
  getTransactions(): Transaction[] {
    return this.transactionService.transactions;
  }

  @channel("create")
  createTransaction(event: any, data: CreateTransactionData): Transaction {
    return this.transactionService.createTransaction(data);
  }

  @channel("delete")
  deleteTransaction(event: any, { id }: DeleteTransactionData): void {
    this.transactionService.deleteTransaction(id);
  }

  @channel("update")
  updateTransaction(event: any, data: EditTransactionData): Transaction {
    return this.transactionService.updateTransaction(data);
  }
}
