import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

// We use the gql tag to parse our query string into a query document
const QCams = gql`
  query {
    cams {
      id
      name
    }
  }
`;

const userOrg = gql`
  query {
    userOrganization {
      id
      first_name
      last_name
      email
      organization {
        id
        name
      }
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
        query: userOrg,
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
