import { createBrowserRouter, Navigate } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Character from "../views/Character";
import Planets from "../views/Planets";
import ShowCharacter from "../views/ShowCharacter";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layouts/>,
        children:[{
            path: '/',
            element: <Character/>
        },{
            path: '/planets',
            element: <Planets/>
        },{
            path: '/character/:id',
            element: <ShowCharacter/>
        }]
    },
    {
        path: '/',
        element: <Navigate to= ''/>
    },
])

export default router