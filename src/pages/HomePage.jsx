import { useQuery } from "@apollo/client/react"
import { GET_POSTS } from "../service/query"

const HomePage = () =>{
    const { loading, error ,data } = useQuery(GET_POSTS, {
       variables:{ 
            input:{
                page: 1,
                limit: 10
            }
        }
    });

      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

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