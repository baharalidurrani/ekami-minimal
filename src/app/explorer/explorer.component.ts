import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import {
  DeleteSiteGQL,
  SiteType,
  UserOrganizationGQL,
  UserOrganizationQuery,
  UserType,
} from '../../generated/graphql';
import { AddSiteComponent } from '../add-site/add-site.component';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
})
export class ExplorerComponent implements OnInit, OnDestroy {
  constructor(
    private userOrg: UserOrganizationGQL,
    private dialog: MatDialog,
    private deleteSiteQL: DeleteSiteGQL
  ) {}

  userOrg$: Observable<ApolloQueryResult<UserOrganizationQuery>>;
  user: UserType;
  userOrgSub: Subscription;
  selectedSite: SiteType;

  ngOnInit(): void {
    console.log(
      '%cexplorer.component.ts line:27 onInit',
      'color: white; background-color: #26bfa5;'
    );
    this.userOrg$ = this.userOrg.fetch();
    this.userOrgSub = this.userOrg$.subscribe((result) => {
      this.user = result.data.userOrganization;
    });
  }

  expandSite(site: SiteType) {
    if (this.selectedSite) this.selectedSite = null;
    else this.selectedSite = site;
  }

  refreshOrg() {
    this.userOrg$ = this.userOrg.fetch({}, { fetchPolicy: 'network-only' });
    if (this.userOrgSub) this.userOrgSub.unsubscribe();
    this.userOrgSub = this.userOrg$.subscribe((result) => {
      this.user = result.data.userOrganization;
    });
  }
  addSite() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.user.organization.id;

    const dialogRef = this.dialog.open(AddSiteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((success) => {
      if (success) this.refreshOrg();
    });
  }

  deleteSite(id: string) {
    const delSub = this.deleteSiteQL.fetch({ id }).subscribe((r) => {
      this.refreshOrg();
      if (this.selectedSite?.id === id) this.selectedSite = null;
      delSub.unsubscribe();
    });
  }

  ngOnDestroy() {
    if (this.userOrgSub) this.userOrgSub.unsubscribe();
  }
}
