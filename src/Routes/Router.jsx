import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/easylearn',
        element: <Home/>
    }
])
export default router;