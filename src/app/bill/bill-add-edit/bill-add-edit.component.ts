import { Component, OnInit, Host } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillStoreService } from '../service/bill-store.service';

@Component({
  selector: 'app-bill-add-edit',
  templateUrl: './bill-add-edit.component.html',
  styleUrls: ['./bill-add-edit.component.sass'],
  providers: [BillStoreService]
})
export class BillAddEditComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private billStore:BillStoreService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      store: ['', Validators.required],
      category: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  onSubmit(){
    this.billStore.addBill(this.form.value);
  }
}
