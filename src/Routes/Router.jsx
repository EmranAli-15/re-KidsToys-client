import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PrimeLayout from "../Layout/PrimeLayout";
import AddToys from "../components/AddToys/AddToys";

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
            }
        ]
    },
]);
export default router