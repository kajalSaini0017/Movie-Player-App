import { useLoaderData, useNavigate } from "react-router";
import './MoviesDetails.css'

function MovieDetails(){
    
    const data=useLoaderData()
    return (
        <div className="movieDetailsComponent">
        <MovieDetailsCard  data={data}/>
        </div>
    )
}
export default MovieDetails;

function MovieDetailsCard({ data }) {
  const navigate=useNavigate();
  function onBack(){
    navigate(-1)
  }

  return (
    <div className="movie-detail-card">
      {/* Background */}
      <div
        className="movie-detail-bg"
        style={{ backgroundImage: `url(${data.Poster})` }}
      />

      {/* Dark overlay */}
      <div className="movie-overlay" />

      {/* Content */}
      <div className="movie-detail-content">
        {/* Left text */}
        <div className="movie-detail-text">
          <h1 className="movie-title">{data.Title}</h1>

          <p className="movie-plot">{data.Plot}</p>

          <div className="movie-meta">
            <span>⭐ {data.imdbRating}</span>
            <span>⏱ {data.Runtime}</span>
            <span>📅 {data.Year}</span>
          </div>

          <div className="movie-buttons">
            <button className="btn secondary" onClick={onBack}>
              ⬅ Back
            </button>

            <a
              href={`https://www.youtube.com/results?search_query=${data.Title} trailer`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn primary">▶ Watch Trailer</button>
            </a>
          </div>
        </div>

        {/* Right poster */}
        <div className="movie-detail-poster">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </div>
    </div>
  );
}