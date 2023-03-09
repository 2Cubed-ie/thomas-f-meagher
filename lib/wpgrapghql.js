import { GraphQLClient } from 'graphql-request';
export { gql } from 'graphql-request';
const gqlEndpoint = 'https://tfm.2cubedtest.com/graphql';

export const wpgraphql = new GraphQLClient(gqlEndpoint, { headers: {} });
