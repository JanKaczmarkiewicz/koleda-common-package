import { ApolloClient, InMemoryCache, split } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/react-hooks";
import { storage } from "@koleda/common-utils";

const backendIp = "localhost"
const backendPort = "3001"

const backendSocket = `${backendIp}:${backendPort}`

const httpLink = createHttpLink({
  uri: `http://${backendSocket}/`,
});


const authLink = setContext(async (_, { headers }) => {
  const token = await storage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
