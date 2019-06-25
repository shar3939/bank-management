import { Component, OnInit, Input } from '@angular/core';
import { AccountsService } from './../services/accounts.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.component.html',
  styleUrls: ['./payment-management.component.css']
})
export class PaymentManagementComponent implements OnInit {
  account:any;

  currencies:string[] = ["INR","USD","EUR","AUD"];

  constructor(public rest:AccountsService, private route: ActivatedRoute, private router: Router) { }

  @Input() transaction = { toAccountID: 0, transferAmnt: 0 , currency:'', accountId: 0};
  fromAccountID:number; 
  private uriParams:any;
  
  ngOnInit() {
    this.rest.getAccountDtls().subscribe((data: {}) => {
      console.log(data);
      this.account = data;
    });

    this.uriParams = this.route.params.subscribe(params => {
      this.transaction.accountId = +params['fromAccountID']; 
      console.log(this.fromAccountID,"fromAccountID ID")
    });
  }

  transferMoney() {
    
    this.rest.transferMoney(this.transaction).subscribe((result) => {
      this.router.navigate(['/accounts']);
    }, (err) => {
      console.log(err);
    });
  }

}
