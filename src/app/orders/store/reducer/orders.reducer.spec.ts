import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import * as OrdersActions from '../actions/orders.actions';
import * as OrdersReducers from './orders.reducer';

describe('[reducer] ordersReducer', () => {
  // quand l'action getAllOrdersSuccessAction va etre invoquée on doit verifier
  // que le tableau d'orders passé en payload de l'action getAllOrdersSuccessAction
  // remplace bien ce que contient initialOrdersState.orders en comparant
  // le state initial avec le new state return par le reducer après le dispatch de l'action getAllOrdersSuccessAction

  it('Should set orders in OrdersState', () => {
    const initialOrderState = OrdersReducers.initialOrderState;
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
    const action = OrdersActions.getAllOrdersSuccessAction({ orders });
    const newState = OrdersReducers.ordersReducer(initialOrderState, action);
    expect(newState).toEqual({ ...initialOrderState, orders });
  });
});
