import { gql } from "@apollo/client"

// https://www.apollographql.com/docs/react/data/queries
// Create GraphQl query name GET_POSTS to fetch all data
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
