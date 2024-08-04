import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Grammar from "../Pages/Grammar";
import Vocabulary from "../Pages/Vocabulary";
import Pronunciation from "../Pages/Pronunciation";
import Conversation from "../Pages/Conversation";
const router = createBrowserRouter([
    {
        path: '/easylearn',
        element: <Home/>
    },
    {
        path: "/",
        element: <Grammar/>
    },
    {
        path: "/vocabulary",
        element: <Vocabulary/>
    },
    {
        path: "/pronunciation",
        element: <Pronunciation/>
    },
    {
        path: '/conversation',
        element: <Conversation/>
    }
])
export default router;