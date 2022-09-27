
export enum TransactionTypes {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
}

export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  type: TransactionTypes;
  categoryId: string | null;
  subCategoryId: string | null;
  comment?: string;
}

export type CreateTransactionData = {
  date: Date;
  amount: number;
  type: TransactionTypes;
  categoryId?: string;
  subCategoryId?: string;
  comment?: string;
}

export type DeleteTransactionData = {
  id: string;
}

export type EditTransactionData = {
  id: string;
  date?: Date;
  amount?: number;
  type?: TransactionTypes;
  categoryId?: string;
  subCategoryId?: string;
  comment?: string;
}
