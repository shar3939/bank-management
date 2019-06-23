import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8100/accounts/accountID/123455';
const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
const depositEndpoint = 'http://localhost:8100/accounts/deposit'; 

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

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}