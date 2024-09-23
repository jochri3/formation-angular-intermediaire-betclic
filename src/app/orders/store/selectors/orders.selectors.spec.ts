import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as OrdersReducers from '../reducer/orders.reducer';
import * as OrdersSelectors from './orders.selectors';

describe('[selectors] orders', () => {
  it('[selectOrders] Should return list of Orders as an array', () => {
    const initialState = OrdersReducers.initialOrderState;
    // mock d'un Order
    const order = new Order({
      tjmHt: 1200,
      nbJours: 3,
      tva: 20,
      state: StateOrder.OPTION,
      typePresta: 'formation',
      client: 'betclic',
      comment: '',
      id: 5,
    });
    initialState.orders.push(order);
    // call selectorAllOrders
    const orders = OrdersSelectors.selectOrders({
      [OrdersReducers.ordersFeatureKey]: initialState,
    });
    // expect if orders is equal an array with order
    expect(orders).toEqual([order]);
  });
});
