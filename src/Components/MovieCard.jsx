import { useState } from 'react';
import './MovieCard.css'

export function MovieCard({ data }) {
  console.log(data)

  return (
    <div className='movieContainer'>
     <div className='movieContainertext'>
        <h1>Popular Movies</h1>
     </div>
     <div>
       <ul className="movieCardcontainer">
        {data.map((innerArray, i) =>
          innerArray.Search.map((item, j) =>
             <PosterImage key={`${i}-${j}`} item={item} />
          )
        )}
      </ul>
     </div>
     
     
    </div>
  )
}
function PosterImage({ item }) {
  const [isLoaded, setIsLoaded] = useState(true);
  if (!item.Poster || item.Poster === "" || !isLoaded) {
    // Agar poster empty hai ya load fail ho gaya to kuch bhi render na karo 
    return null;
  }
  return (
    <li className='movieCard' >
      <img
        className='movieposter'
        src={item.Poster}
        alt={item.Title || "Movie Poster"}
        onError={() => setIsLoaded(false)}
        // agar image fail ho jaye to hide kar do 
        //style={{ width: "150px", height: "220px", objectFit: "cover" }}
      />
    </li>
  );
}
