import { gql } from "@apollo/client"

//https://daily.dev/blog/react-apollo-basics-for-beginners
//the mutation allow you to add new text and update the list
export const CREATE_POSTS = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;