import { CustomerTransaction } from './shared/interfaces/customer-transaction';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(customersTransaction:CustomerTransaction[], term:string): any{

    return customersTransaction.filter((customerTransaction)=>customerTransaction.customerName?.toLocaleLowerCase().includes(term.toLowerCase())); 

  }
  // transform(transactions: CustomerTransaction[], searchTerm: string, amountFilter: number): CustomerTransaction[] {
  //   if (!searchTerm && amountFilter === 0) {
  //     return transactions;
  //   }

  //   return transactions.filter(transaction =>
  //     transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     transaction.amount >= amountFilter
  //   );
  // }
  //   return CustomerTransaction.filter(transaction =>
  //     transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     transaction.amount >= amountFilter
  //   );
  // }
  // transform(CustomerTransaction: CustomerTransaction[], searchTerm: string, amountFilter: number): any[] {
  //   if (!CustomerTransaction) {
  //     return [];
  //   }

  //   if (!searchTerm && amountFilter === 0) {
  //     return CustomerTransaction;
  //   }

  //   return CustomerTransaction.filter(transaction => {
  //     const customerNameMatch = searchTerm
  //       ? transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  //       : true;
  //     const amountMatch = amountFilter > 0
  //       ? transaction.amount <= amountFilter
  //       : true;
  //     return customerNameMatch && amountMatch;
  //   });
  // }

  // transform(transactions: CustomerTransaction[], searchTerm: string, amountFilter: number): CustomerTransaction[] {
  //   if (!searchTerm && amountFilter === 0) {
  //     return transactions;
  //   }

  //   return transactions.filter(transaction =>
  //     transaction.customerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     transaction.amount >= amountFilter
  //   );
  // }

}
