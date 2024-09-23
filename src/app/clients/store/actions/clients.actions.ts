import { createAction, props } from '@ngrx/store';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

// try get all order capted by effect
export const tryGetAllClientsAction = createAction(
  '[Clients] try get all Clients'
);

// get all Client capted by reducer
export const getAllClientsSuccessAction = createAction(
  '[Clients] get all Clients',
  props<{ clients: Client[] }>()
);

// try add Client capted by effect
export const tryAddClientAction = createAction(
  '[Clients] try add Client',
  props<{ client: Client }>()
);

// add Client capted by reducer
export const addClientSuccessAction = createAction(
  '[Clients] add Client',
  props<{ client: Client }>()
);

// try update Client capted by effect
export const tryUpdateClientAction = createAction(
  '[Clients] try update Client',
  props<{ client: Client }>()
);

// update Client capted by reducer
export const updateClientSuccessAction = createAction(
  '[Clients] update Client',
  props<{ client: Client }>()
);

// try change stage Client capted by effect
export const tryChangeStateClientAction = createAction(
  '[Clients] try change state Client',
  props<{ client: Client; state: StateClient }>()
);

// try delete Client capted by effect
export const tryDeleteClientAction = createAction(
  '[Clients] try delete Client',
  props<{ id: number }>()
);

// delete Client capted by reducer
export const deleteClientSuccessAction = createAction(
  '[Clients] delete Client',
  props<{ id: number }>()
);

// try get Client by id capted by effect
export const tryGetClientByIdAction = createAction(
  '[ todos ] try get Client by id',
  props<{ id: number }>()
);

// get Client by id capted by reducer
export const getClientByISuccessdAction = createAction(
  '[ todos ] get Client by id',
  props<{ client: Client }>()
);

// errors from api
export const errorClientsAction = createAction(
  '[Clients] error Clients',
  props<{ error: any }>()
);
