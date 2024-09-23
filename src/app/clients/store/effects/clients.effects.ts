import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as clientsActions from '../actions/clients.actions';
import { selectRouteParam } from 'src/app/store/reducer/router.reducer';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/core/models/client';
import { StateClient } from 'src/app/core/enums/state-client';

@Injectable()
export class ClientsEffects {
  constructor(
    private clientsService: ClientsService,
    private actions$: Actions,
    private store: Store,
    private router: Router
  ) {}

  // get all clients
  getAllClientEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientsActions.tryGetAllClientsAction),
      switchMap(() =>
        this.clientsService.collection.pipe(
          map((clients: Client[]) =>
            clientsActions.getAllClientsSuccessAction({ clients })
          ),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        )
      )
    )
  );

  // add Client
  addClientsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientsActions.tryAddClientAction),
      switchMap(({ client }: { client: Client }) =>
        this.clientsService.add(client).pipe(
          map((Client: Client) => {
            return clientsActions.addClientSuccessAction({ client });
          }),
          tap(() => {
            this.router.navigate(['clients']);
          }),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        )
      )
    )
  );

  // get Client by id
  getClientEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientsActions.tryGetClientByIdAction),
      switchMap(({ id }: { id: number }) =>
        this.clientsService.getItemById(id).pipe(
          map((client: Client) =>
            clientsActions.getClientByISuccessdAction({ client })
          ),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        )
      )
    )
  );

  // update Client
  updateClientEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientsActions.tryUpdateClientAction),
      switchMap(({ client }: { client: Client }) =>
        this.clientsService.update(client).pipe(
          map((client: Client) =>
            clientsActions.updateClientSuccessAction({ client })
          ),
          tap(() => {
            this.router.navigate(['clients']);
          }),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        )
      )
    )
  );

  // change state of Client
  changeStaterEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientsActions.tryChangeStateClientAction),
      switchMap(({ client, state }: { client: Client; state: StateClient }) =>
        this.clientsService.changeState(client, state).pipe(
          map((client: Client) =>
            clientsActions.updateClientSuccessAction({ client })
          ),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        )
      )
    )
  );

  // delete Client
  deleteClientEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientsActions.tryDeleteClientAction),
      switchMap(({ id }: { id: number }) =>
        this.clientsService.delete(id).pipe(
          map(() => clientsActions.deleteClientSuccessAction({ id })),
          catchError((error) =>
            of(clientsActions.errorClientsAction({ error }))
          )
        )
      )
    )
  );

  // id param in route
  editIdChange$ = createEffect(() =>
    this.store.select(selectRouteParam('id')).pipe(
      map((id) => {
        if (id) {
          return clientsActions.tryGetClientByIdAction({ id: Number(id) });
        } else {
          return clientsActions.errorClientsAction({ error: null });
        }
      })
    )
  );
}
