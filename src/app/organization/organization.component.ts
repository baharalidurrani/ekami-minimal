import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  OrganizationGQL,
  OrganizationQuery,
  OrganizationType,
  SiteType,
} from '../../generated/graphql';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
})
export class OrganizationComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private orgQL: OrganizationGQL) {}

  org: OrganizationType;
  orgQLSub: Subscription;
  orgQL$: Observable<ApolloQueryResult<OrganizationQuery>>;
  selectedSite: SiteType;

  ngOnInit() {
    console.log(
      '%corganization.component.ts line:26 onInit',
      'color: white; background-color: #26bfa5;'
    );
    const id = this.route.snapshot.params['id'];
    this.orgQL$ = this.orgQL.fetch({ id });
    this.orgQLSub = this.orgQL$.subscribe((o) => {
      this.org = o.data.organization;
      console.log(
        '%corganization.component.ts onInit organization.name',
        'color: white; background-color: #007acc;',
        o.data.organization
      );
    });
  }

  expandSite(site: SiteType) {
    if (this.selectedSite) this.selectedSite = null;
    else this.selectedSite = site;
  }

  ngOnDestroy() {
    this.orgQLSub.unsubscribe();
  }
}
