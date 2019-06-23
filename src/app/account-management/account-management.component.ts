import { AccountsService } from './../services/accounts.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

  account:any;

  constructor(public rest:AccountsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getAccountDtls().subscribe((data: {}) => {
      console.log(data);
      this.account = data;
    });
  }

  depositMoney() {
    console.log('Inside Deposit Money');
    
  }

}
