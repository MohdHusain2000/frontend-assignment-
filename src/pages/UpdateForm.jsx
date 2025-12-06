import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client/react";
import { GET_POST } from "../service/query";
import { UPDATE_POSTS } from "../service/mutation";


//https://dev.to/lucis/update-apollo-cache-after-a-mutation-and-get-instant-benefits-on-your-ui-1c3b
const UpdateForm = () => {
    
  // useParams to get id value from url
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // the call of api differ from the orginal becuase of removing input.
  // the query will be fetch to get the data of single post based in id and update the form 
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
        id: Number(id),
    },
  });

  // useEffect will be used to fill the form with data based on id
  useEffect(() => {
    if (data?.post) {
      setFormData({
        title: data.post.title,
        body: data.post.body,
      });
    }}, [data]);

  // the mutation will be used to update the the post.
  const [updatePost, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_POSTS);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // the call of api differ from the orginal becuase of removing input.
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost({
      variables: {
          id: Number(id),
          title: formData.title,
          body: formData.body,
      },
    });

    alert("Post updated successfully!");
    navigate("/");
  };

  if (loading) return <p>Loading form...</p>;
  if (error) return <p>Error loading form: {error.message}</p>;

  return (
    <>
    <Link to = "/"><button>Home</button></Link>
    <div>
      <h2>Edit Post: {id}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="body"
          placeholder="Enter body"
          value={formData.body}
          onChange={handleChange}
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  </>
  );
};

export default UpdateForm;
