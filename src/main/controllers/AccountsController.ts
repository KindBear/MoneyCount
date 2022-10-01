import { IpcMainInvokeEvent } from "electron";
import { controller } from "../core/controller";
import { channel } from "../core/channel";
import { AccountService } from "../services/AccountService";
import { Account, CreateAccountData, DeleteAccountData, EditAccountData } from "../../shared/types/Account";

@controller("accounts/")
export class AccountsController {

  constructor(
    private accountService: AccountService,
  ) {
  }

  @channel("get")
  public getAccounts(): Account[] {
    return this.accountService.accounts;
  }

  @channel("create")
  public createAccount(event: IpcMainInvokeEvent, data: CreateAccountData): Account {
    return this.accountService.createAccount(data);
  }

  @channel("delete")
  public deleteAccount(event: IpcMainInvokeEvent, { id }: DeleteAccountData): void {
    this.accountService.deleteAccount(id);
  }

  @channel("update")
  public updateCategories(event: IpcMainInvokeEvent, data: EditAccountData): Account {
    return this.accountService.updateAccount(data);
  }
}
