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
    this.unregistered$ = this.unregisteredQL.fetch();
    this.unregisteredSub = this.unregistered$.subscribe((r) => {
      this.clients = r.data.brokerUnregisteredClients;
    });
  }

  ngOnDestroy() {
    if (this.unregisteredSub) this.unregisteredSub.unsubscribe();
  }
}
