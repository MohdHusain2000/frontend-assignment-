import { useQuery } from "@apollo/client"
import { GET_POSTS } from "../service/query"

//https://dev.to/lucis/update-apollo-cache-after-a-mutation-and-get-instant-benefits-on-your-ui-1c3b
const HomePage = () =>{
    const { loading, error ,data } = useQuery(GET_POSTS, {
       variables:{ 
            input:{
                page: 1,
                limit: 10
            }
        }
    });

    //handle loading and error states
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
 
    
    //return data of the api
    return(
    <>
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