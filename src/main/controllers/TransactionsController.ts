import { IpcMainInvokeEvent } from "electron";
import { controller } from "../core/controller";
import { channel } from "../core/channel";
import { TransactionsService } from "../services/TransactionsService";
import {
  CreateTransactionData,
  DeleteTransactionData,
  EditTransactionData,
  Transaction,
} from "../../shared/types/Transactions";

@controller("transactions/")
export class TransactionsController {

  constructor(
    private transactionService: TransactionsService,
  ) {
  }

  @channel("get")
  public getTransactions(): Transaction[] {
    return this.transactionService.transactions;
  }

  @channel("create")
  public createTransaction(event: IpcMainInvokeEvent, data: CreateTransactionData): Transaction {
    return this.transactionService.createTransaction(data);
  }

  @channel("delete")
  public deleteTransaction(event: IpcMainInvokeEvent, { id }: DeleteTransactionData): void {
    this.transactionService.deleteTransaction(id);
  }

  @channel("update")
  public updateTransaction(event: IpcMainInvokeEvent, data: EditTransactionData): Transaction {
    return this.transactionService.updateTransaction(data);
  }
}
