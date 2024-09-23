import { createAction, props } from '@ngrx/store';

// update order capted by reducer
export const changeFontsizeAction = createAction(
  '[Root Fontsize] change font size',
  props<{ isBig: boolean }>()
);
