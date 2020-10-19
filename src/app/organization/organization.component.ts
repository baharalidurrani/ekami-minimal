import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrganizationGQL, OrganizationType } from '../../generated/graphql';
import { GqlCacheService } from '../gql-cache.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
})
export class OrganizationComponent implements OnInit, OnDestroy {
  org: OrganizationType;
  orgQLSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private gc: GqlCacheService,
    private orgQL: OrganizationGQL
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.gc.orgQL$ = this.orgQL.fetch({ id });
    this.orgQLSub = this.gc.orgQL$.subscribe((o) => {
      this.org = o.data.organization;
      console.log(
        '%corganization.component.ts onInit organization.name',
        'color: white; background-color: #007acc;',
        o.data.organization.name
      );
    });
  }
  ngOnDestroy() {
    this.orgQLSub.unsubscribe();
  }
}
