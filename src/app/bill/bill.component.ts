import { Component, OnInit } from '@angular/core';
import { BillStoreService } from './service/bill-store.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.sass'],
  providers: [BillStoreService]
})
export class BillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
