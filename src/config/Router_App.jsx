import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Main_Components } from "../pages/Main_Component";
import { Private_Routes } from "./Private_Routes";
import { Cards } from "../pages/Cards";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

            <Route path="" element={<Signup />} />
            <Route path="login" element={<Login />} />


            {/* Private Route */}
            <Route element={<Private_Routes />}>
                <Route path="Homepage" element={<Main_Components />} />
                <Route path='/products/:id' element={<Cards />} />

            </Route>
        </Route>
    )
)


const Router_App = () => {


    return <RouterProvider router={router} />
}


export { Router_App }