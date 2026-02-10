import { useLoaderData } from "react-router"
import { MovieCard } from "../MovieCard";
import ImageSlider from "../ImageSlider";
import style from './movies.module.css'
export function Movies() {
    const data = useLoaderData();


    return (
       
        <div className={style.movies}>
            <ImageSlider />
            <div className={style.movieContainertext}>
                <h1>Popular Movies</h1>
            </div>
           <MovieCard data={data} basepath="movies"/>
              
        </div>
   )
}