const APIKEY = import.meta.env.VITE_API_KEY;
export async function getData() {


        const MovieName = ["munjya", "de de pyaar de", "housefull", "ek deewane ki deewaniyat", "shaitaan"];


        const details =await Promise.all(

            MovieName.map(async (movie) => {

                try {
                    const response =await fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${movie}`);
                    const data =await response.json();
                    if (data.Response === "True") {
                        return data;
                    }
                    else {
                        return ([]);
                    }

                }
                catch (error) {
                    return null;

                }
            }
            ))
    return details;


}

export async function getmoviesdetails({ params }) {
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&i=${params.id}`)
        const data = await res.json()
        return data;
    }
    catch (error) {
        return null;
    }
}


