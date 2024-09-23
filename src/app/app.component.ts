import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { MainFacade } from './store/facade/main.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public bigSize$ = this.mainFacade.bigSize$;
  constructor(private mainFacade: MainFacade) {
    this.bigSize$.subscribe((data) => console.log(data));
  }
  public title = 'crm-nov-bis';
  @HostListener('window:scroll')
  onScroll() {
    console.log('scroll');
  }

  check() {
    console.log('CD APP');
  }
}
