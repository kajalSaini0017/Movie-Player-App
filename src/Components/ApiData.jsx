// export async function getData() {


//             const url = `https://streaming-availability.p.rapidapi.com/shows/search/filters?country=in&series_granularity=show&order_direction=asc&order_by=original_title&show_original_language=en&genres_relation=and&output_language=en&show_type=movie`;

//             const options = {
//                 method: 'GET',
//                 headers: {
//                     'x-rapidapi-key': import.meta.env.VITE_API_KEY,
//                     'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
//                 }
//             };

//             try {
//                 const response = await fetch(url, options);
//                 const data = await response.json();
//                 return data
//             } 
//             catch (error) {
//                 console.error(error);
                
//             }
        
//    return details;
//  }
//  getData()
