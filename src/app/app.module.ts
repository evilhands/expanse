import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule}from '@angular/forms';
import { MaterialDesignModule } from './material-design.module';
import { BillAddEditComponent } from './bill/bill-add-edit/bill-add-edit.component';
import { BillListComponent } from './bill/bill-list/bill-list.component';
import { BillComponent } from './bill/bill.component';
@NgModule({
   declarations: [
      AppComponent,
      BillAddEditComponent,
      BillListComponent,
      BillComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ReactiveFormsModule, 
      MaterialDesignModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
