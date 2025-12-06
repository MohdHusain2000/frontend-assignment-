import { gql } from "@apollo/client"
import { ssrExportNameKey } from "vite/module-runner";

// https://www.apollographql.com/docs/react/data/queries
// Create GraphQl query name GET_POSTS to fetch all data
// The query allow you to get data from the Api using graphql.
export const GET_POSTS = gql`
  query GetPosts($input: GetPostsInput!) {
    posts(options: {
      paginate: { page: $input.page, limit: $input.limit }
    }) {
      data {
        id
        title
        body
      }
    }
  }
`;


export const GET_POST = gql`
query GetPost($input: GetPostInput!) {
  post(id: $input.id) {
    id
    title
    body
  }
}
`;



