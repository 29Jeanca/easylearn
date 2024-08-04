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
        path: "/easylearn/grammar",
        element: <Grammar/>
    },
    {
        path: "/easylearn/vocabulary",
        element: <Vocabulary/>
    },
    {
        path: "/easylearn/pronunciation",
        element: <Pronunciation/>
    },
    {
        path: '/easylearn/conversation',
        element: <Conversation/>
    }
])
export default router;