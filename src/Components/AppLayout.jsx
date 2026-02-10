import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./Navbar";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Search } from "./pages/Search";
import  SignIn  from "./pages/SignIn";
import { ErrorPage } from "./pages/ErrorPage";
import { getData, getmoviesdetails } from "./ApiData";
import MovieDetails from "./MovieDetails";
import { signData } from "./pages/SignIn";


function AppLayout(){
     const router=createBrowserRouter([
        {
          path:"/",
          element:<Navbar/>,
          children:[
            {
              index:true,
              element:<Home/>
            },
            {
              path:"/movies",
              element:<Movies/>,
              loader:getData,
              
            },
             {
              path:"/signin",
              element:<SignIn/>,
              action:signData
            },
            {
              path:"/search",
              element:<Search/>, 
              loader:getData 
            },
            {
              path:"/movies/movie/:id",
              element:<MovieDetails/>,
              loader:getmoviesdetails
            },
            {
              path:"/search/movie/:id",
              element:<MovieDetails/>,
              loader:getmoviesdetails
            }
            
          ]
        },
        {
          path:"*",
          element:<ErrorPage/>
        }, 
        
       
     ])

     
    return(
        <RouterProvider router={router}/>
    )
}

export default AppLayout;