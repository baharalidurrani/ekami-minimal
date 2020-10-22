import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  UserOrganizationGQL,
  UserOrganizationQuery,
  UserType,
} from '../generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userOrg: UserOrganizationGQL) {}

  userOrg$: Observable<ApolloQueryResult<UserOrganizationQuery>>;
  user: UserType;
  userOrgSub: Subscription;

  ngOnInit(): void {
    console.log(
      '%capp.component.ts line:23 onInit',
      'color: white; background-color: #26bfa5;'
    );
    this.userOrg$ = this.userOrg.fetch();
    this.userOrgSub = this.userOrg$.subscribe((result) => {
      this.user = result.data.userOrganization;
      console.log(
        '%capp.component.ts onInit userOrg',
        'color: white; background-color: #007acc;',
        result.data.userOrganization.email
      );
    });
  }

  ngOnDestroy() {
    this.userOrgSub.unsubscribe();
  }
}
