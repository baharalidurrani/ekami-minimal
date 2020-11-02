import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  BrokerDeviceType,
  BrokerUnregisteredClientsGQL,
  BrokerUnregisteredClientsQuery,
} from '../../generated/graphql';

@Component({
  selector: 'app-unregistered',
  templateUrl: './unregistered.component.html',
  styleUrls: ['./unregistered.component.css'],
})
export class UnregisteredComponent implements OnInit {
  unregistered$: Observable<ApolloQueryResult<BrokerUnregisteredClientsQuery>>;
  unregisteredSub: Subscription;
  clients: BrokerDeviceType[];

  constructor(private unregisteredQL: BrokerUnregisteredClientsGQL) {}

  ngOnInit() {
    console.log(
      '%cunregistered.component.ts line:23 ngOnInit',
      'color: white; background-color: #26bfa5;'
    );
    this.unregistered$ = this.unregisteredQL.fetch(
      {},
      { fetchPolicy: 'network-only' }
    );
    this.unregisteredSub = this.unregistered$.subscribe((r) => {
      this.clients = r.data.brokerUnregisteredClients;
    });
  }

  ngOnDestroy() {
    if (this.unregisteredSub) this.unregisteredSub.unsubscribe();
  }
}
