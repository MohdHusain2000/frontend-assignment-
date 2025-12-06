import { useMutation } from "@apollo/client";
import { CREATE_POSTS } from "../service/mutation";
import { useState } from 'react';

// https://daily.dev/blog/react-apollo-basics-for-beginners
// https://dev.to/rowsanali/using-react-hooks-for-form-handling-7bl
const AddForm = () => {

  // The useState hook will be used to add state to functional components.
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  const [createPost, { loading, error, data }] = useMutation(CREATE_POSTS);

    // using to update the field of form by adding the new value
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createPost({
      variables: {
        input: {
          title: formData.title,
          body: formData.body,
        }
      }
    });

        setFormData({
        title: "",
        body: ""
    });

  };

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return(
    <>
    <h2>Add method</h2>
    <form onSubmit={handleSubmit}>
        <input
         type= "text"
         name= "title"
         placeholder="Enter title"
         value={formData.title}
         onChange={handleInputChange}

         />

        <input
        type="text"
        name= "body"
        placeholder="Enter body"
        value={formData.body}
        onChange={handleInputChange}
        />    
        <button type="submit">Add</button>
        </form>
  </>
  )
};

export default AddForm;