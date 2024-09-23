import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as OrderActions from './orders.actions';

describe('[action] tryGetAllOrdersActin', () => {
  it('Should create a tryGetAllOrdersAction', () => {
    const action = OrderActions.tryGetAllOrdersAction();
    expect(action).toEqual({
      type: '[Orders] try get all orders',
    });
  });

  it('Should create a getAllOrdersAction', () => {
    const orders = [
      new Order({
        tjmHt: 1200,
        nbJours: 3,
        tva: 20,
        state: StateOrder.OPTION,
        typePresta: 'formation',
        client: 'betclic',
        comment: '',
        id: 5,
      }),
    ];
    const action = OrderActions.getAllOrdersSuccessAction({ orders });
    expect(action).toEqual({
      type: '[Orders] get all orders',
      orders: orders,
    });
  });
});
