import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
const QCams = gql`
  query {
    cams {
      id
      name
    }
  }
`;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit, OnDestroy {
  loading: boolean;
  cams: any[];

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: QCams,
      })
      .valueChanges.subscribe((result) => {
        console.log(result);
        this.loading = result.loading;
        this.cams = result.data.cams;
      });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
