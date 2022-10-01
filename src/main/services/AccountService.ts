import { v4 as uuidv4 } from "uuid";
import { FileService } from "./FileService";
import { OnInit } from "../core/onInit";
import { service } from "../core/service";
import { Observable } from "../core/Observable";
import { Account, CreateAccountData, EditAccountData } from "../../shared/types/Account";
import { TransactionTypes } from "../../shared/types/Transactions";
import { roundAmount } from "../../shared/utils/roundAmount";

@service()
export class AccountService implements OnInit {
  private _accounts: Observable<Account[]>;
  private fileName = "accounts.json";

  constructor(
    private fileService: FileService,
  ) {
    this._accounts = new Observable<Account[]>([]);
  }

  public get accounts(): Account[] {
    return this._accounts.value;
  }

  public async onInit() {
    const categoriesJSON = await this.fileService.readFile(this.fileName);
    if (categoriesJSON) {
      this._accounts.value = JSON.parse(categoriesJSON);
    }
    this._accounts.subscribe((value) => {
      this.fileService.writeFile(this.fileName, JSON.stringify(value));
    });
  }

  public createAccount(data: CreateAccountData): Account {
    const newAccount: Account = {
      id: uuidv4(),
      ...data,
    };
    this._accounts.value = [...this._accounts.value, newAccount];
    return newAccount;
  }

  public deleteAccount(id: string): void {
    this._accounts.value = this._accounts.value.filter(category => category.id !== id);
  }

  public updateAccount({id, ...updateData}: EditAccountData): Account {
    this._accounts.value = this._accounts.value.map(account => {
      if (account.id === id) {
        return {
          ...account,
          ...updateData,
        };
      }

      return account;
    });

    return this._accounts.value.find(category => category.id === id);
  }

  public changeBalance(id: string, type: TransactionTypes, amount: number): void {
    let balanceDelta = 0;

    if (type === TransactionTypes.INCOME) {
      balanceDelta = amount;
    }
    if (type === TransactionTypes.OUTCOME) {
      balanceDelta = amount * -1;
    }

    this._accounts.value = this._accounts.value.map((account) => {
      if (account.id === id) {
        return {
          ...account,
          balance: roundAmount(account.balance + Number(balanceDelta)),
        };
      }

      return account;
    });
  }
}
