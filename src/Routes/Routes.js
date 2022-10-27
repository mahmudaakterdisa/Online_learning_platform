import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blogs/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Coursedetails from "../Pages/Coursedetails/Coursedetails";
import Courses from "../Pages/Courses/Courses";
import Cregistration from "../Pages/Cregistration/Cregistration";
import Generatepdf from "../Pages/Generatepdf/Generatepdf";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


import Wellcome from "../Pages/Wellcomepage/Wellcome";
import Privateroute from "../Privateroute/Privateroute";

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
                path: 'blogs',
                element: <Blog></Blog>
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
                element: <Privateroute><Checkout></Checkout></Privateroute>
            },
            {
                path: '/chekoutdata/:checkoutid',
                loader: async ({ params }) => {
                    return fetch(`https://tech-ademy-server.vercel.app/courses/${params.checkoutid}`)
                },
                element: <Wellcome></Wellcome>
            },
            {
                path: '/chekoutdata/:checkoutid',
                loader: async ({ params }) => {
                    return fetch(`https://tech-ademy-server.vercel.app/courses/${params.checkoutid}`)
                },
                element: <Generatepdf></Generatepdf>
            },
            {

                path: '*',
                element: <div><h1>page not found</h1></div>

            },

        ]

    }

]);