import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_POST } from "../service/query";

const DetailsPage = () => {
  const { id } = useParams(); 

  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
        id: Number(id),
    }
  });

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error loading post: {error.message}</p>;

  const getElementById = data?.post;

  return (
    <>
    <div>
      <Link to="/"><button>Homepage</button></Link>
      
      <Link to={`/edit/${getElementById.id}`}><button>Edit</button></Link>

      <h2>{getElementById.id}</h2>
      <h3>{getElementById.title}</h3>
      <p>{getElementById.body}</p>

    </div>
    </>
  );
};

export default DetailsPage;
