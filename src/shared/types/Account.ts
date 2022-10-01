export interface Account {
  id: string;
  name: string;
  balance: number;
  currency?: string;
}

export type CreateAccountData = {
  name: string;
  balance: number;
  currency?: string;
};

export type DeleteAccountData = {
  id: string;
};

export type EditAccountData = {
  id: string;
  name?: string;
  balance?: number;
  currency?: string;
};
