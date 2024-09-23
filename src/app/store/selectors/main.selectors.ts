import { createFeatureSelector, createSelector } from '@ngrx/store';
import { rootReducerFeatureKey, RootState } from '../reducer/main.reducer';

export const selectMainFeature = createFeatureSelector<RootState>(
  rootReducerFeatureKey
);

export const selectSize = createSelector(
  selectMainFeature,
  (state: RootState): boolean => {
    console.log(state.isBig);

    return state.isBig;
  }
);
