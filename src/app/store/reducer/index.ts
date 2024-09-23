import { routerReducer, RouterState } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';
import { mainReducer, RootState } from './main.reducer';

export const appStateFeatureKey = 'appState';
export interface AppState {
  router: RouterState;
  main: RootState;
}

export const rootReducer: ActionReducerMap<AppState, Action> = {
  router: routerReducer,
  main: mainReducer,
};
