import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  public langs = ['fr', 'en'];
  public defaultLangue = this.translateService.getDefaultLang();
  constructor(
    private versionService: VersionService,
    private cd: ChangeDetectorRef,
    private translateService: TranslateService
  ) {
    console.log(this.translateService.getDefaultLang());
  }
  changeLang(event: any) {
    const lang = event.target.value;
    this.translateService.use(lang);
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.cd.detach();
  }
  public increment(): void {
    this.versionService.increment();
  }
  check() {
    console.log('CD NAV');
  }
}
