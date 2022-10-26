import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Coursedetails from "../Pages/Coursedetails/Coursedetails";
import Courses from "../Pages/Courses/Courses";
import Cregistration from "../Pages/Cregistration/Cregistration";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


import Wellcome from "../Pages/Wellcomepage/Wellcome";

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
            {
                path: 'register',
                element: <Cregistration></Cregistration>
            },
            {
                path: '/courseinfo/:courseId',
                loader: async ({ params }) => {
                    return fetch(`https://tech-ademy-server.vercel.app/courses/${params.courseId}`)
                },
                element: <Coursedetails></Coursedetails>
            },
            {
                path: '/crinfo/:Id',
                loader: async ({ params }) => {
                    return fetch(`https://tech-ademy-server.vercel.app/courses/${params.Id}`)
                },
                element: <Coursedetails></Coursedetails>
            },
            {
                path: '/getDetailsdata/:id',
                loader: async ({ params }) => {
                    return fetch(`https://tech-ademy-server.vercel.app/courses/${params.id}`)
                },
                element: <Checkout></Checkout>
            },
            {
                path: '/chekoutdata/:checkoutid',
                loader: async ({ params }) => {
                    return fetch(`https://tech-ademy-server.vercel.app/courses/${params.checkoutid}`)
                },
                element: <Wellcome></Wellcome>
            },

        ]

    }

]);