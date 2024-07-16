import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { TransactionSearchPipe } from './transaction-search.pipe';
// import { NgxChartsModule } from '@swimlane/ngx-charts';


import {TransactionChartComponent } from './components/transaction-chart/transaction-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchPipe,
    TransactionSearchPipe,
    TransactionChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    // NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
