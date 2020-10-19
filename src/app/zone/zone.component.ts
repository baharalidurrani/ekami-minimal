import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ZoneGQL, ZoneType } from '../../generated/graphql';
import { GqlCacheService } from '../gql-cache.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private gc: GqlCacheService,
    private zoneQL: ZoneGQL
  ) {}
  zone: ZoneType;
  zoneSub: Subscription;
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('%czone.component.ts line:14 zone-id', 'color: #007acc;', id);
    this.gc.zone$ = this.zoneQL.fetch({ id });
    this.zoneSub = this.gc.zone$.subscribe((f) => {
      this.zone = f.data.zone;
      console.log(
        '%czone.component.ts line:25 zone',
        'color: #007acc;',
        this.zone
      );
    });
  }
}
