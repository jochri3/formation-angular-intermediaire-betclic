import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateClient } from 'src/app/core/enums/state-client';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';
import * as clientsActions from '../actions/clients.actions';
import * as clientsSelectors from '../selectors/clients.selectors';

@Injectable({
  providedIn: 'root',
})
export class ClientsFacade {
  constructor(private store: Store) {}
  // selectors
  clients$ = this.store.select(clientsSelectors.selectClients);
  client$ = this.store.select(clientsSelectors.selectClientById);
  // actions
  loadClients() {
    this.store.dispatch(clientsActions.tryGetAllClientsAction());
  }
  addClient(client: Client) {
    this.store.dispatch(clientsActions.tryAddClientAction({ client }));
  }
  updateClient(client: Client) {
    this.store.dispatch(clientsActions.tryUpdateClientAction({ client }));
  }
  changeStateClient(client: Client, state: StateClient) {
    this.store.dispatch(
      clientsActions.tryChangeStateClientAction({ client, state })
    );
  }
  deleteClient(id: number) {
    this.store.dispatch(clientsActions.tryDeleteClientAction({ id }));
  }
  getClientId(id: number) {
    this.store.dispatch(clientsActions.tryGetClientByIdAction({ id }));
  }
}
