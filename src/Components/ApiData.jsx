export async function getData() {

    const MovieName =["munjya","de de pyaar de","housefull","ek deewane ki deewaniyat","shaitaan"];
    const APIKEY=import.meta.env.VITE_API_KEY;

    const details = await Promise.all(

        MovieName.map(async(movie) => {
            
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movie}`);
                const data = await response.json();
                return data;
            }
            catch (error) {
                console.error(error);

            }
        }
    ))
    return details;

}   


