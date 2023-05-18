import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import PrimeLayout from "../Layout/PrimeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrimeLayout></PrimeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);
export default router