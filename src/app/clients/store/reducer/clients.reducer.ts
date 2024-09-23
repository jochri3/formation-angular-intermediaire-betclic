import { createReducer, on } from '@ngrx/store';
import { Client } from 'src/app/core/models/client';
import * as clientsActions from '../actions/clients.actions';

export interface ClientsState {
  clients: Client[];
  error: any;
  selectedClient: Client | null;
}

export const initialClientState: ClientsState = {
  clients: [],
  error: null,
  selectedClient: null,
};

export const clientsFeatureKey = 'clients';

export const clientsReducer = createReducer(
  initialClientState,
  on(
    clientsActions.getAllClientsSuccessAction,
    (state: ClientsState, { clients }: { clients: Client[] }): ClientsState => {
      return {
        ...state,
        clients: [...clients],
      };
    }
  ),
  on(
    clientsActions.errorClientsAction,
    (state: ClientsState, { error }: { error: any }): ClientsState => {
      return {
        ...state,
        error: error,
      };
    }
  ),
  on(
    clientsActions.addClientSuccessAction,
    (state: ClientsState, { client }: { client: Client }): ClientsState => {
      return {
        ...state,
        clients: [...state.clients, client],
      };
    }
  ),
  on(
    clientsActions.getClientByISuccessdAction,
    (state: ClientsState, { client }: { client: Client }): ClientsState => {
      return {
        ...state,
        selectedClient: client,
      };
    }
  ),
  on(
    clientsActions.updateClientSuccessAction,
    (state: ClientsState, { client }: { client: Client }): ClientsState => {
      return {
        ...state,
        clients: state.clients.map((item) =>
          item.id !== client.id ? item : client
        ),
      };
    }
  ),
  on(
    clientsActions.deleteClientSuccessAction,
    (state: ClientsState, { id }: { id: number }): ClientsState => {
      return {
        ...state,
        clients: state.clients.filter((item) => item.id !== id),
      };
    }
  )
);
