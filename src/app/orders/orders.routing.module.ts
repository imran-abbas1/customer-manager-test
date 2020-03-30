import {NgModule} from '@angular/core';
import {OrderComponent} from './order/order.component';
import {Routes, RouterModule} from '@angular/router';
import {AddOrderComponent} from './add-order/add-order.component';
const routes: Routes = [
  {
    path: '', component: OrderComponent, children: [
      {
        path: 'add-order', component: AddOrderComponent
      }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class OrdersRoutingModule {

}
