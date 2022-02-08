import {Component, Input, OnInit} from '@angular/core';
import {AccountsService} from "../services/accounts.service";
import {Account} from "../models/account.model";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts!: Account[];

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.getAllAccounts();
  }

}
