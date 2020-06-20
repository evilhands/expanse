import { Component, OnInit, Host } from '@angular/core';
import { BillStoreService } from '../service/bill-store.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.sass']
})
export class BillListComponent implements OnInit {

  constructor(public billStore:BillStoreService) { }

  ngOnInit(): void {
 
  }

}
