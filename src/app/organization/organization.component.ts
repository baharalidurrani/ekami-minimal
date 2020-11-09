import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  OrganizationGQL,
  OrganizationQuery,
  OrganizationType,
  SiteType,
} from '../../generated/graphql';
import { AddSiteComponent } from '../add-site/add-site.component';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
})
export class OrganizationComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private orgQL: OrganizationGQL,
    private dialog: MatDialog
  ) {}

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
    this.fetchOrg(id);
  }

  private fetchOrg(id: string, refresh?: boolean) {
    this.orgQL$ = refresh
      ? this.orgQL.fetch({ id }, { fetchPolicy: 'network-only' })
      : this.orgQL.fetch({ id });

    if (this.orgQLSub) this.orgQLSub.unsubscribe();
    this.orgQLSub = this.orgQL$.subscribe((o) => {
      this.org = o.data.organization;
    });
  }

  expandSite(site: SiteType) {
    if (this.selectedSite) this.selectedSite = null;
    else this.selectedSite = site;
  }

  addSite() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.org.id;

    const dialogRef = this.dialog.open(AddSiteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((success) => {
      if (success) this.fetchOrg(this.org.id, true);
    });
  }

  ngOnDestroy() {
    this.orgQLSub.unsubscribe();
  }
}
