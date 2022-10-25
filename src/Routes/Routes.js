import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                loader: () => fetch('https://tech-ademy-server.vercel.app/courses'),
                element: <Home></Home>
            },
            {
                path: 'courses',
                loader: () => fetch('https://tech-ademy-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: 'Login',
                element: <Login></Login>
            },
        ]

    }

]);