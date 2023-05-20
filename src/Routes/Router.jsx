import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PrimeLayout from "../Layout/PrimeLayout";
import AddToys from "../components/AddToys/AddToys";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import PrivetRoute from "./PrivetRoute";
import Blogs from "../components/Blogs/Blogs";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrimeLayout></PrimeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addToys",
                element: <PrivetRoute><AddToys></AddToys></PrivetRoute>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toy-server-omega.vercel.app/totalToys')
            },
            {
                path: "/myToys",
                element: <PrivetRoute><MyToys></MyToys></PrivetRoute>
            },
            {
                path: "/toyDetails/:id",
                element: <PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://toy-server-omega.vercel.app/singleToy/${params.id}`)
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
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