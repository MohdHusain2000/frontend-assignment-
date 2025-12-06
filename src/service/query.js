import { gql } from "@apollo/client"
import { ssrExportNameKey } from "vite/module-runner";

// https://www.apollographql.com/docs/react/data/queries
// Create GraphQl query name GET_POSTS to fetch all data
// The query allow you to get data from the Api using graphql.
export const GET_POSTS = gql`
   query GetPosts($page: Int, $limit: Int) {
    posts(options: { paginate: { page: $page, limit: $limit } }) {        
      data {
        id
        title
        body
      }
    }
  }
`;

export const GET_POST = gql`
query GetPost($id: ID!) {
  post(id: $id) {
    id
    title
    body
  }
}
`;



