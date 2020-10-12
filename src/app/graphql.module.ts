import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { environment } from '../environments/environment';

const uri = `${environment.api.uri}:${environment.api.port}${environment.api.graphqlEndpoint}`;
// TODO
// tslint:disable-next-line: typedef
export function provideApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));

  // TODO
  // Get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');

  const client = setContext((operation, context) => ({
    headers: {
      client_id: environment.api.headers.client_id,
      client_secret: environment.api.headers.client_secret,
    },
  }));

  const link = ApolloLink.from([basic, client, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache,
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
