import { CustomerTransaction } from './shared/interfaces/customer-transaction';
import { transition } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';
import { Transactions } from './shared/interfaces/transactions';

@Pipe({
  name: 'transactionSearch'
})
export class TransactionSearchPipe implements PipeTransform {

  transform(CustomerTransaction:CustomerTransaction[], term:string): any {
    return CustomerTransaction.filter((CustomerTransaction)=>CustomerTransaction.amount?.toString().includes(term.toString())); 
  }
  }

