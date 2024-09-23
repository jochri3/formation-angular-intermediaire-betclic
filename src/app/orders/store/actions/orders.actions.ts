import { createAction, props } from '@ngrx/store';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

// try get all order capted by effect
export const tryGetAllOrdersAction = createAction(
  '[Orders] try get all orders'
);


// get all order capted by reducer
export const getAllOrdersSuccessAction = createAction(
  '[Orders] get all orders',
  props<{ orders: Order[] }>()
);

// try add order capted by effect
export const tryAddOrderAction = createAction(
  '[Orders] try add order',
  props<{ order: Order }>()
);

// add order capted by reducer
export const addOrderSuccessAction = createAction(
  '[Orders] add order',
  props<{ order: Order }>()
);

// try update order capted by effect
export const tryUpdateOrderAction = createAction(
  '[Orders] try update order',
  props<{ order: Order }>()
);

// update order capted by reducer
export const updateOrderSuccessAction = createAction(
  '[Orders] update order',
  props<{ order: Order }>()
);

// try change stage order capted by effect
export const tryChangeStateOrderAction = createAction(
  '[Orders] try change state order',
  props<{ order: Order; state: StateOrder }>()
);

// try delete order capted by effect
export const tryDeleteOrderAction = createAction(
  '[Orders] try delete order',
  props<{ id: number }>()
);

// delete order capted by reducer
export const deleteOrderSuccessAction = createAction(
  '[Orders] delete order',
  props<{ id: number }>()
);

// try get order by id capted by effect
export const tryGetOrderByIdAction = createAction(
  '[ Orders ] try get order by id',
  props<{ id: number }>()
);

// get order by id capted by reducer
export const getOrderByISuccessdAction = createAction(
  '[ Orders ] get order by id',
  props<{ order: Order }>()
);

// errors from api
export const errorOrdersAction = createAction(
  '[Orders] error orders',
  props<{ error: any }>()
);

// get order by client capted by effect
export const tryGetOrderClientdAction = createAction(
  '[ Orders ] try get order by name',
  props<{ expression: string }>()
);

// try get order by filter on order state capted by effect
export const tryGetOrdersByFilterdAction = createAction(
  '[ Orders ] try get order by filter on state',
  props<{ filter: string | StateOrder }>()
);
