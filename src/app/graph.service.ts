import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
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

const MutTest = gql`
  mutation($n1: Float!, $n2: Float!) {
    testEqual(num1: $n1, num2: $n2)
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
  public testMutation$: Observable<FetchResult<{ testEqual: number }>>;

  userOrgQuery(): void {
    this.userOrg$ = this.apollo.query<{ userOrganization: UserType }>({
      query: QUserOrg,
    });
  }
  camsQuery(): void {
    this.camList$ = this.apollo.query<{ cams: CameraType[] }>({ query: QCams });
  }
  testSub(): void {
    this.testMutation$ = this.apollo.mutate<{ testEqual: number }>({
      mutation: MutTest,
      variables: { n1: 1, n2: 1 },
    });
  }
}
