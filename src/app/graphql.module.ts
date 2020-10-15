import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from '@apollo/client/core';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

import { environment } from '../environments/environment';

const uri = `${environment.api.uriHTTP}:${environment.api.port}${environment.api.graphqlEndpoint}`;
const wsURI = `${environment.api.uriWSS}:${environment.api.port}${environment.api.graphqlSubscription}`;

// tslint:disable-next-line: typedef
function provideApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));
  const client = setContext((operation, context) => {
    // TODO
    // Get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    return {
      headers: {
        client_id: environment.api.headers.client_id,
        client_secret: environment.api.headers.client_secret,
      },
    };
  });

  // Create an http link:
  const http = httpLink.create({
    uri,
  });

  // Create a WebSocket link:
  const ws = new WebSocketLink({
    uri: wsURI,
    options: {
      reconnect: true,
    },
  });

  // @ts-ignore
  const hLink = ApolloLink.from([basic, client, http]);
  // @ts-ignore
  const wLink = ApolloLink.from([basic, client, ws]);

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wLink,
    hLink
  );

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [HttpClientModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: provideApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
