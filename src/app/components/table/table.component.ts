import { CustomerTransaction } from '../../shared/interfaces/customer-transaction';
import { Transactions } from '../../shared/interfaces/transactions';
import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  constructor(private _DataService:DataService){}

  customers:any = [];
  customerObject:any = [];
  customerTransactions:any = []; 
  customerId:any = [];
  customerName:any = [];
  transactions:CustomerTransaction[] = [];
  selectedCustomerTransactions: any = [];

  customerTransactionAmounts: { [key: string]: number } = {};

 
  // transactionAmount:any = [];

  searchTerm:string = "";
  amountFilter: number = 0;
  // transactionsByCustomer:any
  ngOnInit() {
    
    
    this._DataService.fetchCustomers().subscribe({
      next:(data)=>{
        this.customers = data;
        console.log(this.customers);
        
        this.customerObject = this.customers.reduce((acc:any, customer:any) => {
          acc[customer.id] = customer.name;
          return acc;
        }, {});
        
        console.log(this.customerObject);
        // this._DataService.fetchTransaction();
      },error:(erro)=>{
        console.log('Error fetching customers:', erro);
        
      }
    })

    this._DataService.fetchTransaction().subscribe({

      next:(data)=>{

        this.transactions = data;

        console.log(this.transactions);
        
        for(let i = 0; i < this.transactions.length; i++){

          this.customerId = this.transactions[i].customer_id;

          if (this.customerObject.hasOwnProperty(this.customerId)) {

           this.customerName = this.customerObject[this.customerId];
           this.transactions[i] = { ...this.transactions[i], customerName: this.customerName };

            // this.transactions.push(this.customerObject)
            // this.customerTransaction.push(this.transactions[i])
            // console.log(this.transactions);
            
            // console.log(this.customerTransaction);
            
          }else{
            console.log("Not here");
            
          }
          

        }
        this.customerTransactions.push(this.transactions);

        // console.log(`customerTransactions ${this.customerTransactions}`);
        
        // this.transactionAmount = Math.floor(this.transactions[0].amount);

        
        // console.log(this.transactionAmount);
        // console.log(this.transactions.length);
        
      }
    
    })  
  }

  calculateTransactionAmounts(): void {
    this.customerTransactionAmounts = this.customerTransactions.reduce((acc:any, customer:any) => {
      const totalAmount = this.transactions
        .filter(transaction => transaction.customer_id === +customer.id)
        .reduce((sum, transaction) => sum + transaction.amount, 0);
      acc[customer.id] = totalAmount;
      return acc;
    }, {} as { [key: string]: number });
  }

  selectCustomer(customerId: string): void {
    console.log(customerId)
    this.selectedCustomerTransactions = this.transactions.filter(transaction => transaction.customer_id === +customerId);
    console.log(this.selectedCustomerTransactions)

  }
}

