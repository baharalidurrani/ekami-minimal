import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserOrganizationGQL, UserType } from '../generated/graphql';
import { GqlCacheService } from './gql-cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private gc: GqlCacheService,
    private userOrg: UserOrganizationGQL
  ) {}
  user: UserType;
  userOrgSub: Subscription;
  ngOnInit(): void {
    this.gc.userOrg$ = this.userOrg.fetch();
    this.userOrgSub = this.gc.userOrg$.subscribe((result) => {
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
