import { createReducer, on } from '@ngrx/store';
import { changeFontsizeAction } from '../actions/main.actions';

export interface RootState {
  isBig: boolean;
}

export const initialRootState: RootState = {
  isBig: false,
};

export const rootReducerFeatureKey = 'main';

export const mainReducer = createReducer(
  initialRootState,
  on(
    changeFontsizeAction,
    (state: RootState, { isBig }: { isBig: boolean }): RootState => {
      return {
        ...state,
        isBig: isBig,
      };
    }
  )
);
