import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';

// We use the gql tag to parse our query string into a query document
const QCams = gql`
  query {
    cams {
      id
      name
    }
  }
`;

const QUserOrg = gql`
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

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  constructor(private apollo: Apollo) {}

  public userOrg$: Observable<ApolloQueryResult<any>>;
  public camList$: Observable<ApolloQueryResult<any>>;

  userOrgQuery(): void {
    this.userOrg$ = this.apollo.query<any>({ query: QUserOrg });
  }
  camsQuery(): void {
    this.camList$ = this.apollo.query<any>({ query: QCams });
  }
}
