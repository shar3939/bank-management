import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from './../services/accounts.service';
import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  @Input() transactionData = { accountID: 0, depositAmount: 0 };

  constructor(public rest:AccountsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  depositMoney() {
    this.rest.depositMoney(this.transactionData).subscribe((result) => {
      this.router.navigate(['/accounts']);
    }, (err) => {
      console.log(err);
    });
  }


}
