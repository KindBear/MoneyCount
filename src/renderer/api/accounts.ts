import api from "./apiInstance";
import { Account, CreateAccountData, DeleteAccountData, EditAccountData } from "../../shared/types/Account";

enum AccountsChannel {
  GET = "accounts/get",
  CREATE = "accounts/create",
  UPDATE = "accounts/update",
  DELETE = "accounts/delete",
}

export function getAccounts(): Promise<Account[]> {
  return api<undefined, Account[]>(AccountsChannel.GET);
}

export function createAccount(data: CreateAccountData): Promise<Account> {
  return api<CreateAccountData, Account>(AccountsChannel.CREATE, data);
}

export function updateAccount(data: EditAccountData): Promise<Account> {
  return api<EditAccountData, Account>(AccountsChannel.UPDATE, data);
}

export function deleteAccount(id: string): Promise<void> {
  return api<DeleteAccountData, void>(AccountsChannel.DELETE, { id });
}
