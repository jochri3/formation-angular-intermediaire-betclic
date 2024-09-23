import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { VersionService } from 'src/app/core/services/version.service';
import { OrdersService } from '../../services/orders.service';
import { OrdersFacade } from '../../store/facade/orders.facade';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageListOrdersComponent implements OnInit {
  public states = Object.values(StateOrder);
  public title = 'List Orders';
  public headers: string[];
  public collection$ = this.facade.orders$;
  public version$!: Subject<number>;
  public filters!: string[];
  constructor(
    private facade: OrdersFacade,
    private versionService: VersionService,
    private router: Router
  ) {
    this.headers = [
      'Action',
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    this.version$ = this.versionService.version;
    this.filters = ['ALL', ...this.states];
  }
  ngOnInit(): void {
    this.facade.loadOrders();
  }
  public changeState(item: Order, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;
    this.facade.changeStateOrder(item, state);
  }

  public goToEdit(id: number): void {
    this.router.navigate(['orders', 'edit', id]);
  }
  public deleteItem(id: number): void {
    this.facade.deleteOrder(id);
  }
  public selectItems(expression: string): void {
    this.facade.getOrderByClient(expression);
  }

  public filterItems(filter: string | StateOrder): void {
    filter = filter.toUpperCase();
    if (filter !== 'ALL') {
      this.facade.loadOrdersByFilterState(filter);
    } else {
      this.facade.loadOrders();
    }
  }

  check() {
    console.log('CD PG LIST ORDERS');
  }
}
