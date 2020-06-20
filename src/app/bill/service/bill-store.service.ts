import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillStoreService {

  private _bills = new Array<Bill>();

  constructor() { }

  get bills():Bill[]{
    return this._bills;
  }

  addBill(bill:Bill):void{
    this._bills.push(bill);
    // this._bills = [...this._bills,bill]
  }
}
