import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteGQL, SiteType } from 'src/generated/graphql';
import { GqlCacheService } from '../gql-cache.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
})
export class SiteComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private gc: GqlCacheService,
    private siteQL: SiteGQL
  ) {}
  site: SiteType;
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('%csite.component.ts line:14 id', 'color: #007acc;', id);
    this.gc.siteQL$ = this.siteQL.fetch({ id }, { errorPolicy: 'all' });
    this.gc.siteQL$.subscribe((s) => {
      if (s.error || s.errors) throw s.errors;
      this.site = s.data.site;
      console.log(
        '%csite.component.ts line:24 s.data.site',
        'color: #007acc;',
        s.data.site
      );
    });
  }
}
