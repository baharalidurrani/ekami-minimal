import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { SubscriptionResult } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  TestEqualGQL,
  TestEqualMutation,
  TestRandomGQL,
  TestRandomQuery,
  TestSubGQL,
  TestSubSubscription,
  UserOrganizationGQL,
  UserOrganizationQuery,
} from '../generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public testEqual$: Observable<FetchResult<TestEqualMutation>>;
  public userOrg$: Observable<ApolloQueryResult<UserOrganizationQuery>>;
  public testRandom$: Observable<ApolloQueryResult<TestRandomQuery>>;
  public testSub$: Observable<SubscriptionResult<TestSubSubscription>>;
  constructor(
    private userOrg: UserOrganizationGQL,
    private testEqual: TestEqualGQL,
    private testRandom: TestRandomGQL,
    private testSub: TestSubGQL
  ) {}
  ngOnInit(): void {
    this.userOrg$ = this.userOrg.fetch();
    this.userOrg$.subscribe((result) => {
      console.log('Yay new query: ', result.data.userOrganization);
    });

    this.testEqual$ = this.testEqual.mutate({ n1: 1, n2: 1 });
    this.testEqual$.subscribe((r) => {
      console.log('Yay new Mutation', r.data.testEqual);
    });

    this.testRandom$ = this.testRandom.fetch();
    this.testRandom$.subscribe((r) => {
      console.log('Yay new testQuery', r.data.testRandom);
    });

    this.testSub$ = this.testSub.subscribe();
    this.testSub$.subscribe((r) => {
      console.log('Yay new test === Subscription', r.data.testSub);
    });
  }
}
