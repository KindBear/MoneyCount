import { Account, CreateAccountData } from "../../shared/types/Account";
import { makeAutoObservable, runInAction } from "mobx";
import { createAccount, getAccounts } from "../api/accounts";

class AccountsStore {
  public accounts: Account[] = [];
  public isCreateModalOpened: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public openCreateModal = () => {
    this.isCreateModalOpened = true;
  }

  public closeCreateModal = () => {
    this.isCreateModalOpened = false;
  }

  public async getAccounts() {
    const accounts = await getAccounts();

    runInAction(() => {
      this.accounts = accounts;
    });
  }

  public async createAccount(data: CreateAccountData) {
    await createAccount(data);
    this.getAccounts();
  }
}

export default new AccountsStore();
