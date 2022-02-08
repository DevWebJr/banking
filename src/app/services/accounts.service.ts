import {Injectable} from "@angular/core";
import {Account} from "../models/account.model";

@Injectable({
  providedIn: "root"
})

export class AccountsService {
  accounts:Account[] = [
    {
      id: 1,
      lastName: "Nick",
      firstName: "Fury",
      amount: 500000
    },
    {
      id: 2,
      lastName: "Banner",
      firstName: "Bruce",
      amount: 800
    },
    {
      id: 3,
      lastName: "Stark",
      firstName: "Tony",
      amount: 10000000
    },
    {
      id: 4,
      lastName: "Rogers",
      firstName: "Steve",
      amount: 50
    }
  ];

  getAllAccounts(): Account[] {
    return this.accounts;
  }

  getAccountById(accountId:number): Account {
    const account = this.accounts.find(account => account.id === accountId);

    if(!account) {
      throw Error('Account not found!');
    } else {
      return account;
    }
  }
}
