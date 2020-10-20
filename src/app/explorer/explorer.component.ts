import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  UserOrganizationGQL,
  UserOrganizationQuery,
  UserType,
} from '../../generated/graphql';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
})
export class ExplorerComponent implements OnInit, OnDestroy {
  constructor(private userOrg: UserOrganizationGQL) {}
  userOrg$: Observable<ApolloQueryResult<UserOrganizationQuery>>;
  user: UserType;
  userOrgSub: Subscription;
  ngOnInit(): void {
    this.userOrg$ = this.userOrg.fetch();
    this.userOrgSub = this.userOrg$.subscribe((result) => {
      this.user = result.data.userOrganization;
      console.log(
        '%cexplorer.component.ts line:24 this.user',
        'color: #007acc;',
        this.user
      );
    });
  }
  ngOnDestroy() {
    this.userOrgSub.unsubscribe();
  }
}
