import { useQuery } from "@apollo/client/react";
import { GET_POSTS } from "../service/query"

//https://dev.to/lucis/update-apollo-cache-after-a-mutation-and-get-instant-benefits-on-your-ui-1c3b
const HomePage = () =>{
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
    <h2>Welcome to react </h2>
    {data?.posts?.data?.map(get => 
        <div key={get.id}>
        <h4>{get.id}</h4>
        <h2>{get.title}</h2>
        <p>{get.body}</p>
        </div>
     )}
    </>
    )
}

export default HomePage;