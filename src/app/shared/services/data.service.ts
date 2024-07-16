import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }

  private data = "http://localhost:3000";

  fetchCustomers():Observable<any>{
    return this._HttpClient.get(`${this.data}/customers`);
  }

  fetchTransaction():Observable<any>{
   return this._HttpClient.get(`${this.data}/transactions`);
  }
}
