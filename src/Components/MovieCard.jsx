import { useState } from 'react';
import './MovieCard.css'
import { NavLink } from 'react-router';

export function MovieCard({ data,basepath }) {

  if (Array.isArray(data)) {

    return (
      <div className='movieContainer'>
        <ul className="movieCardcontainer">
          {data.map((innerArray) =>
            innerArray.Search.map((item) =>
              <PosterImage key={item.imdbID} item={item} basepath={basepath}/>
            )

          )}
        </ul>
      </div>
    )
  }
  else if (typeof data === 'object') {
    return (
      <div className='movieContainer'>
        <ul className='movieCardcontainer'>
          {
            data.Search.map((item) =>
              <PosterImage key={item.imdbID} item={item} basepath={basepath}/>
            )
          }
        </ul>
      </div>
    )
  }
}


function PosterImage({ item,basepath }) {
  const [isLoaded, setIsLoaded] = useState(true);
  if (!item.Poster || item.Poster === "" || !isLoaded) {
    return null;
  }
  return (
    <li className='movieCard'  >
      <NavLink to={`/${basepath}/movie/${item.imdbID}`}>
      <img
        className='movieposter'
        src={item.Poster}
        alt={item.Title || "Movie Poster"}
        onError={() => setIsLoaded(false)}
      />
      </NavLink>
    </li>
  );
}
