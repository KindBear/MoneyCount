import { Account, CreateAccountData } from "../../shared/types/Account";
import { makeAutoObservable, runInAction } from "mobx";
import { createAccount, getAccounts } from "../api/accounts";
import { DropdownItem } from "../components/Dropdown";

class AccountsStore {
  public accounts: Account[] = [];
  public isCreateModalOpened: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public get accountsItems(): DropdownItem[] {
    return this.accounts.map((account) => {
      return {
        value: account.id,
        label: account.name,
      };
    });
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
