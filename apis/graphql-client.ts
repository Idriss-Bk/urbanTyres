import { GraphQLClient } from 'graphql-request';

const endpoint = `https://cyclewaycoffee.us.to/tyres/graphql`
export const client = new GraphQLClient(endpoint);