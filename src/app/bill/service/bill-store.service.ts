import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BillComponent } from '../bill.component';

@Injectable()
export class BillStoreService {
  private readonly url = 'http://localhost:8080/bills';

  private _bills = new Array<Bill>();

  constructor(private http: HttpClient) {
    this.getBills();
  }

  get bills(): Bill[] {
    return this._bills;
  }

  addBill(bill: Bill): void {
    this._bills.push(bill);
  }

  getBills(): void {
    this.http.get<Bill[]>(this.url).subscribe((res) => {
      this._bills = res;
      console.log(res);
      console.log(this._bills);
    });
  }
}
