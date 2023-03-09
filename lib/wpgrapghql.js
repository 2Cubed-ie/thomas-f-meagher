import { GraphQLClient } from 'graphql-request';
export { gql } from 'graphql-request';
const gqlEndpoint = 'https://2cubed.ie/graphql';

export const wpgraphql = new GraphQLClient(gqlEndpoint, { headers: {} });
