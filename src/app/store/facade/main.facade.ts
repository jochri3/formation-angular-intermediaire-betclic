import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeFontsizeAction } from '../actions/main.actions';
import { selectSize } from '../selectors/main.selectors';

@Injectable({
  providedIn: 'root',
})
export class MainFacade {
  // selectors
  bigSize$ = this.store.select(selectSize);
  constructor(private store: Store) {}
  // actions
  changeSize(isBig: boolean) {
    this.store.dispatch(changeFontsizeAction({ isBig }));
  }
}
