import {NgModule} from '@angular/core';
import {OrderComponent} from './order/order.component';
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
  {
    path: '', component: OrderComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})

export class OrdersRoutingModule {

}
