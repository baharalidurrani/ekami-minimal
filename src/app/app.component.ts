import { Component, OnInit } from '@angular/core';
import { UserOrganizationGQL, UserType } from '../generated/graphql';
import { GqlCacheService } from './gql-cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private gc: GqlCacheService,
    private userOrg: UserOrganizationGQL
  ) {}
  user: UserType;
  ngOnInit(): void {
    this.gc.userOrg$ = this.userOrg.fetch();
    this.gc.userOrg$.subscribe((result) => {
      this.user = result.data.userOrganization;
      console.log(
        '%capp.component.ts onInit userOrg',
        'color: white; background-color: #007acc;',
        result.data.userOrganization.email
      );
    });
  }
}
