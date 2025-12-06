import { gql } from "@apollo/client"

//https://daily.dev/blog/react-apollo-basics-for-beginners
//the mutation allow you to add new text and update the list
export const CREATE_POSTS = gql`
  mutation CreatePost($title: String!, $body: String!, $userId: ID!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export const UPDATE_POSTS =  gql`
  mutation UpdatePost($id: ID!, $title: String, $body: String) {
    updatePost(id: $id, input: { title: $title, body: $body }) {
    id
    title
    body
  }
}
`;
