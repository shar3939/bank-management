import { DepositComponent } from './deposit/deposit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountManagementComponent } from './account-management/account-management.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { ForexManagementComponent } from './forex-management/forex-management.component';
import { AppComponent } from './app.component';
import { BankWelcomeComponent } from './bank-welcome/bank-welcome.component';

const routes: Routes = [
  {
    path:'', component: BankWelcomeComponent
  },
  {
    path:'accounts', component: AccountManagementComponent
  }, 
  {
    path:'payments/:fromAccountID', component: PaymentManagementComponent
  }, 
  {
    path:'forex', component:ForexManagementComponent
  }, 
  {
    path:'deposit', component:DepositComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
