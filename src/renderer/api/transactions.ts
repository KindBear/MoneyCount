import api from "./apiInstance";
import {
  CreateTransactionData,
  DeleteTransactionData,
  EditTransactionData,
  Transaction
} from "../../shared/types/Transactions";

enum TransactionsChannel {
  GET = "transactions/get",
  CREATE = "transactions/create",
  UPDATE = "transactions/update",
  DELETE = "transactions/delete",
}

export function getTransactions(): Promise<Transaction[]> {
  return api<undefined, Transaction[]>(TransactionsChannel.GET);
}

export function createTransaction(data: CreateTransactionData): Promise<Transaction> {
  return api<CreateTransactionData, Transaction>(TransactionsChannel.CREATE, data);
}

export function updateTransaction(data: EditTransactionData): Promise<Transaction> {
  return api<EditTransactionData, Transaction>(TransactionsChannel.UPDATE, data);
}

export function deleteTransaction(id: string): Promise<void> {
  return api<DeleteTransactionData, void>(TransactionsChannel.DELETE, { id });
}
