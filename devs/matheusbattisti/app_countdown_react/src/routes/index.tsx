import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Countdown from "../Pages/Countdown";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/countdown',
                element: <Countdown />
            }
        ]
    }
])

export { router }