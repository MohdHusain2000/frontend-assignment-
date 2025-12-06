import { gql } from "@apollo/client"

//https://daily.dev/blog/react-apollo-basics-for-beginners
//the mutation allow you to add new text and update the list

//Due to synatex error occured (.) in the api it was
//modified by substitute the input and real values required. 
export const CREATE_POSTS = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
      title
      body
    }
  }
`;

//Similarly remove the input and (.) and declare the type of input directly.
export const UPDATE_POSTS =  gql`
mutation UpdatePost($id: ID!, $title: String!, $body:String!) {
  updatePost(id: $id, input: {
    title: $title,
    body: $body
  }) {
    id
    title
    body
  }
}
`;
