import { Injectable } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { SubscriptionResult } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  TestEqualMutation,
  TestRandomQuery,
  TestSubSubscription,
  UserOrganizationQuery,
} from '../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class GqlCacheService {
  public testEqual$: Observable<FetchResult<TestEqualMutation>>;
  public userOrg$: Observable<ApolloQueryResult<UserOrganizationQuery>>;
  public testRandom$: Observable<ApolloQueryResult<TestRandomQuery>>;
  public testSub$: Observable<SubscriptionResult<TestSubSubscription>>;
  constructor() {}
}
