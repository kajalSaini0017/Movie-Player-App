import { useLoaderData } from "react-router";
import { MovieCard } from "../MovieCard";
  const data=useLoaderData()

export function Search(){
    return(
        <div>
            <MovieCard data={data}/>
        </div>
    )
}