import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { PaymentManagementComponent } from './payment-management/payment-management.component';
import { ForexManagementComponent } from './forex-management/forex-management.component';
import { BankWelcomeComponent } from './bank-welcome/bank-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { DepositComponent } from './deposit/deposit.component';
  
@NgModule({
  declarations: [
    AppComponent,
    AccountManagementComponent,
    PaymentManagementComponent,
    ForexManagementComponent,
    BankWelcomeComponent,
    DepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
