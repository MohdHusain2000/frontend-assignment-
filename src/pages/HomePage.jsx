import { useQuery } from "@apollo/client/react";
import { GET_POSTS } from "../service/query"
import "../style/Home.css"
import { useNavigate } from "react-router-dom";

//https://dev.to/lucis/update-apollo-cache-after-a-mutation-and-get-instant-benefits-on-your-ui-1c3b
const HomePage = () =>{
    const navigate = useNavigate();
    const { loading, error ,data } = useQuery(GET_POSTS, {
    // the call of api differ from the Document becuase of removing input and avoid errors.
        variables:{ 
                page: 1,
                limit: 10
        }
    });

    //handle loading and error states
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
 
    
    //return data of the api
    return(
    <>
    <button className="Addbtn" onClick={() =>navigate(`/Add`)}>Add</button>
    <h2>Welcome to react application </h2>
    <div className="container">
    {data?.posts?.data?.map(get => 
        <div className="home" key={get.id}>
        <h2>{get.title}</h2>
        <p>{get.body}</p>
    <div className="buttons">
          <button className="btn" onClick={() =>navigate(`/${get.id}`)}>View</button>
          <button className="btn" onClick={() =>navigate(`/Edit/${get.id}`)}>Edit</button>
    </div>
    </div>
     )}
    </div>
    </>
    )
}

export default HomePage;