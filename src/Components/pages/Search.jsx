import { useLoaderData } from "react-router";
import { MovieCard } from "../MovieCard";
import './Search.css'
import { useEffect, useState } from "react";

export function Search() {
    const loaderMovies = useLoaderData();
    const [search, setSearch] = useState("");
    const [movie, setMovie] = useState("");
    const [error, setError] = useState("")
    const [moviedata, setMoviedata] = useState(loaderMovies);
    const [loading, setLoading] = useState(false);

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function handleSearchClick() {
        setMovie(search);
        setSearch("");
    }

    useEffect(() => {
        async function fetchMovies(movie) {
            const APIKEY = import.meta.env.VITE_API_KEY;
            try {
                setLoading(true);
                setError()
                const res = await fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${movie}`);
                const data = await res.json();
                if (data.Response === "False") {
                    setError(data.Error || "No movies found");
                    setMoviedata();
                }
                else {
                    setMoviedata(data);
                }
            } catch (error) {
                setError("Something went wrong. Please try again.")
            } finally {
                setLoading(false);
            }
        }
        if (movie) {
            fetchMovies(movie);
        }
    }, [movie]);

    return (
        <div className="searchSeaction">
            <div className="SearchContainer">
                <input
                    type="text"
                    onChange={handleSearch}
                    value={search}
                    className="inputcontainer"
                    placeholder="Enter movie name"
                />
                <button className="searchbtn" onClick={handleSearchClick}>Search</button>
            </div>
            <div>
                {loading && <div className="loading"><h1>Loading...</h1></div>}
                {error && (
                    <div className="error-message-movie">
                        <h2>{error}</h2>
                    </div>
                )}

                <MovieCard data={moviedata} basepath="search" />
            </div>
        </div>
    );
}
