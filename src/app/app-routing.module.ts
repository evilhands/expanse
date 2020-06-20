import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillAddEditComponent } from './bill/bill-add-edit/bill-add-edit.component';
import { BillComponent } from './bill/bill.component';


const routes: Routes = [{
 path:'', component: BillComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
