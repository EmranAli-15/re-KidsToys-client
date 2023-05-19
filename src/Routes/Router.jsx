import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PrimeLayout from "../Layout/PrimeLayout";
import AddToys from "../components/AddToys/AddToys";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrimeLayout></PrimeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addToys",
                element: <AddToys></AddToys>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>
            },
            {
                path: "/myToys",
                element: <MyToys></MyToys>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);
export default router