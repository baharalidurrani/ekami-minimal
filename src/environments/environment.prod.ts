export const environment = {
  production: true,
  api: {
    uri: `http://127.0.0.1`,
    port: 4000,
    graphqlEndpoint: `/graphql/ql`,
    authEndpoint: `/oauth/token`,
    headers: {
      client_id: 'server',
      client_secret: 'serverSecret',
    },
  },
};
