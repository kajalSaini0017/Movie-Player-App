import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./Navbar";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Search } from "./pages/Search";
import { Categories } from "./pages/Categories";
import { SignIn } from "./pages/SignIn";
import { ErrorPage } from "./pages/ErrorPage";

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
              element:<Movies/>  
            },
            {
              path:"/search",
              element:<Search/>  
            },
            {
              path:"/categories",
              element:<Categories/>  
            },
            {
              path:"/signin",
              element:<SignIn/>  
            }
          ]
        },
        {
          path:"*",
          element:<ErrorPage/>
        }
     ])

     
    return(
        <RouterProvider router={router}/>
    )
}

export default AppLayout;