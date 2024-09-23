import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersFacade } from '../../store/facade/orders.facade';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  constructor(private facade: OrdersFacade) {}

  ngOnInit(): void {}
  public action(item: Order): void {
    this.facade.addOrder(item);
  }
}
