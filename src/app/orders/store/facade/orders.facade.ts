import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as ordersActions from '../actions/orders.actions';
import * as ordersSelectors from '../selectors/orders.selectors';

@Injectable({
  providedIn: 'root',
})
export class OrdersFacade {
  constructor(private store: Store) {}
  // selectors
  orders$ = this.store.select(ordersSelectors.selectOrders);
  order$ = this.store.select(ordersSelectors.selectOrderById);
  // actions
  loadOrders() {
    this.store.dispatch(ordersActions.tryGetAllOrdersAction());
  }
  addOrder(order: Order) {
    this.store.dispatch(ordersActions.tryAddOrderAction({ order }));
  }
  updateOrder(order: Order) {
    this.store.dispatch(ordersActions.tryUpdateOrderAction({ order }));
  }
  changeStateOrder(order: Order, state: StateOrder) {
    this.store.dispatch(
      ordersActions.tryChangeStateOrderAction({ order, state })
    );
  }
  deleteOrder(id: number) {
    this.store.dispatch(ordersActions.tryDeleteOrderAction({ id }));
  }
  getOrderId(id: number) {
    this.store.dispatch(ordersActions.tryGetOrderByIdAction({ id }));
  }
  getOrderByClient(expression: string) {
    this.store.dispatch(ordersActions.tryGetOrderClientdAction({ expression }));
  }
  loadOrdersByFilterState(filter: string | StateOrder) {
    this.store.dispatch(ordersActions.tryGetOrdersByFilterdAction({ filter }));
  }
}
