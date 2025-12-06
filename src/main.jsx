import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import ReactDOM from "react-dom/client";

//https://www.apollographql.com/docs/react/get-started
const client = new ApolloClient({
  link: new HttpLink({ uri: "https://graphqlzero.almansi.me/api" }),
  cache: new InMemoryCache(),
});


//Since it is a small project the Apollo service can be added directly into main.jsx
//The app will have access to Apollo service features.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <ApolloProvider client={client}>
    <App />                          
  </ApolloProvider>,
  </StrictMode>
)

