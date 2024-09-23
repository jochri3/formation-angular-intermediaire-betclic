import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Client } from 'src/app/core/models/client';
import { clientsFeatureKey, ClientsState } from '../reducer/clients.reducer';

export const selectClientsFeature =
  createFeatureSelector<ClientsState>(clientsFeatureKey);

export const selectClients = createSelector(
  selectClientsFeature,
  (state: ClientsState): Client[] => {
    return state.clients;
  }
);

// select Client by id
export const selectClientById = createSelector(
  selectClientsFeature,
  (state: ClientsState): Client | null => {
    return state.selectedClient;
  }
);
