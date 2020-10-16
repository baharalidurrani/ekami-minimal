import { Component, OnInit } from '@angular/core';
import {
  TestEqualGQL,
  TestRandomGQL,
  TestSubGQL,
  UserOrganizationGQL,
  UserType,
} from '../generated/graphql';
import { GqlCacheService } from './gql-cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private gc: GqlCacheService,
    private userOrg: UserOrganizationGQL,
    private testEqual: TestEqualGQL,
    private testRandom: TestRandomGQL,
    private testSub: TestSubGQL
  ) {}
  user: UserType;
  ngOnInit(): void {
    this.gc.userOrg$ = this.userOrg.fetch();
    this.gc.userOrg$.subscribe((result) => {
      this.user = result.data.userOrganization;
      console.log('Yay new query: ', result.data.userOrganization);
    });

    this.gc.testEqual$ = this.testEqual.mutate({ n1: 1, n2: 1 });
    this.gc.testEqual$.subscribe((r) => {
      console.log('Yay new Mutation', r.data.testEqual);
    });

    this.gc.testRandom$ = this.testRandom.fetch();
    this.gc.testRandom$.subscribe((r) => {
      console.log('Yay new testQuery', r.data.testRandom);
    });

    this.gc.testSub$ = this.testSub.subscribe();
    this.gc.testSub$.subscribe((r) => {
      console.log('Yay new test === Subscription', r.data.testSub);
    });
  }
}
