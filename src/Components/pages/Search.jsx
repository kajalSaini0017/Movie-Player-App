import { useLoaderData } from "react-router";
import { MovieCard } from "../MovieCard";
import './Search.css'
import { useEffect, useState } from "react";
export function Search() {
    const [card, setCard] = useState(true)
    const [search, setSearch] = useState("");
    const [movie, setMovie] = useState("");
    const [moviedata, setMoviedata] = useState();

    function handleSearch(e) {
        setSearch(e.target.value)
    }
    function handleSearchClick() {
        setMovie(search);
        setCard(false);
        setSearch("")
    }
    useEffect( () => {
        async function fetchMovies(movie) {
            const APIKEY = import.meta.env.VITE_API_KEY;
            try {
                const res = await fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${movie}`)
                const data = await res.json();
                setMoviedata(data);

            }
            catch (error) {
                console.log(error)
            }
        }
        if (movie) {
            fetchMovies(movie);
        }

    }, [movie])


    const movies = useLoaderData()
    return (
        <div className="searchSeaction">
            <div className="SearchContainer">
                <input type="text" onChange={handleSearch} value={search} className="inputcontainer" placeholder="Enter movie name" />
                <button className="searchbtn" onClick={handleSearchClick}>Search</button>
            </div>
            <div>
                {card ? <MovieCard data={movies} basepath="search"/> : <MovieCard data={moviedata} basepath="search"/>}
            </div>
            
        </div>
    )
}