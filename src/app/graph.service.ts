import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { CameraType, UserType } from 'types/gql';

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
        sites {
          id
          name
          floors {
            id
            name
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  constructor(private apollo: Apollo) {}

  public userOrg$: Observable<
    ApolloQueryResult<{ userOrganization: UserType }>
  >;
  public camList$: Observable<ApolloQueryResult<{ cams: CameraType[] }>>;

  userOrgQuery(): void {
    this.userOrg$ = this.apollo.query<{ userOrganization: UserType }>({
      query: QUserOrg,
    });
  }
  camsQuery(): void {
    this.camList$ = this.apollo.query<{ cams: CameraType[] }>({ query: QCams });
  }
}
