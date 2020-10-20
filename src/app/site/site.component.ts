import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import { SiteGQL, SiteQuery, SiteType } from '../../generated/graphql';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
})
export class SiteComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private siteQL: SiteGQL) {}
  siteQLSub: Subscription;
  site: SiteType;
  siteQL$: Observable<ApolloQueryResult<SiteQuery>>;
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('%csite.component.ts line:14 id', 'color: #007acc;', id);
    this.siteQL$ = this.siteQL.fetch({ id }, { errorPolicy: 'all' });
    this.siteQLSub = this.siteQL$.subscribe((s) => {
      if (s.error || s.errors) throw s.errors;
      this.site = s.data.site;
    });
  }
  ngOnDestroy() {
    this.siteQLSub.unsubscribe();
  }
}
