import { GraphQLClient } from 'graphql-request';

const endpoint = `https://dev-padre.pantheonsite.io/graphql`
export const client = new GraphQLClient(endpoint);