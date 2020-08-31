import { ApolloClient, InMemoryCache, split } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/react-hooks";
import { storage } from "@koleda/common-utils";
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = createHttpLink({
  uri: "http://localhost:3001",
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:5000/`,
  options: {
    reconnect: true
  }
});

const authLink = setContext(async (_, { headers }) => {
  const token = await storage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ?? `Bearer ${token}`,
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(splitLink),
});
