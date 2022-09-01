import { TransactionTypes } from "../constants/TransactionTypes";

export interface TransactionDto {
  id: string;
  date: Date;
  amount: number;
  type: TransactionTypes;
  comment?: string;
}
