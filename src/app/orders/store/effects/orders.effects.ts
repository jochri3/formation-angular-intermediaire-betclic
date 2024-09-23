import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import * as ordersActions from '../actions/orders.actions';
import { selectRouteParam } from 'src/app/store/reducer/router.reducer';

@Injectable()
export class OrdersEffects {
  constructor(
    private ordersService: OrdersService,
    private actions$: Actions,
    private store: Store,
    private router: Router
  ) {}

  // get all orders
  getAllOrdersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryGetAllOrdersAction),
      switchMap(() =>
        this.ordersService.collection.pipe(
          map((orders: Order[]) =>
            ordersActions.getAllOrdersSuccessAction({ orders })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );

  // add order
  addOrdersEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryAddOrderAction),
      switchMap(({ order }: { order: Order }) =>
        this.ordersService.add(order).pipe(
          map((order: Order) => {
            return ordersActions.addOrderSuccessAction({ order });
          }),
          tap(() => {
            this.router.navigate(['orders']);
          }),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );

  // get order by id
  getOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryGetOrderByIdAction),
      switchMap(({ id }: { id: number }) =>
        this.ordersService.getItemById(id).pipe(
          map((order: Order) =>
            ordersActions.getOrderByISuccessdAction({ order })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );

  // update order
  updateOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryUpdateOrderAction),
      switchMap(({ order }: { order: Order }) =>
        this.ordersService.update(order).pipe(
          map((order: Order) =>
            ordersActions.updateOrderSuccessAction({ order })
          ),
          tap(() => {
            this.router.navigate(['orders']);
          }),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );

  // change state of order
  changeStaterEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryChangeStateOrderAction),
      switchMap(({ order, state }: { order: Order; state: StateOrder }) =>
        this.ordersService.changeState(order, state).pipe(
          map((order: Order) =>
            ordersActions.updateOrderSuccessAction({ order })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );

  // delete order
  deleteOrderEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryDeleteOrderAction),
      switchMap(({ id }: { id: number }) =>
        this.ordersService.delete(id).pipe(
          map(() => ordersActions.deleteOrderSuccessAction({ id })),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );

  // id param in route
  editIdChange$ = createEffect(() =>
    this.store.select(selectRouteParam('id')).pipe(
      map((id) => {
        if (id) {
          return ordersActions.tryGetOrderByIdAction({ id: Number(id) });
        } else {
          return ordersActions.errorOrdersAction({ error: null });
        }
      })
    )
  );

  // get orders by filter
  getOrdersByFilterClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryGetOrderClientdAction),
      switchMap(({ expression }: { expression: string }) =>
        this.ordersService.getItemsBySearch(expression).pipe(
          map((orders: Order[]) =>
            ordersActions.getAllOrdersSuccessAction({ orders })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );

  // get orders by filter on state order
  getOrdersByFilterState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ordersActions.tryGetOrdersByFilterdAction),
      switchMap(({ filter }: { filter: string | StateOrder }) =>
        this.ordersService.getItemsByFilter(filter).pipe(
          map((orders: Order[]) =>
            ordersActions.getAllOrdersSuccessAction({ orders })
          ),
          catchError((error) => of(ordersActions.errorOrdersAction({ error })))
        )
      )
    )
  );
}
