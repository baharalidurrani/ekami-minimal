import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, Subscription } from 'rxjs';
import { ZoneGQL, ZoneQuery, ZoneType } from '../../generated/graphql';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent implements OnInit {
  constructor(private route: ActivatedRoute, private zoneQL: ZoneGQL) {}
  zone: ZoneType;
  zoneSub: Subscription;
  zone$: Observable<ApolloQueryResult<ZoneQuery>>;
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('%czone.component.ts line:14 zone-id', 'color: #007acc;', id);
    this.zone$ = this.zoneQL.fetch({ id });
    this.zoneSub = this.zone$.subscribe((f) => {
      this.zone = f.data.zone;
      console.log(
        '%czone.component.ts line:25 zone',
        'color: #007acc;',
        this.zone
      );
    });
  }
}
