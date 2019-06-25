import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8765/bank-account-mgmt/accounts/accountID/123457';
const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
const depositEndpoint = 'http://localhost:8765/bank-account-mgmt/accounts/deposit'; 
const transferEndpoint = 'http://localhost:8765/payments-management/transfer'; 

@Injectable({
  providedIn: 'root'
})

export class AccountsService {
  constructor(private http: HttpClient) {
    
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAccountDtls(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  depositMoney(transaction): Observable<any> {
    console.log(transaction);
    console.log(httpOptions);
    return this.http.post<any>(depositEndpoint, JSON.stringify(transaction), httpOptions).pipe(
      tap((transaction) => console.log(`added balance`)),
      catchError(this.handleError<any>('Transaction'))
    ); 
  }

  transferMoney(transaction): Observable<any> {
    console.log(transaction);
    console.log(httpOptions);
    return this.http.post<any>(transferEndpoint, JSON.stringify(transaction), httpOptions).pipe(
      tap((transaction) => console.log(`Transfer Done.!`)),
      catchError(this.handleError<any>('Transfer Failed'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}