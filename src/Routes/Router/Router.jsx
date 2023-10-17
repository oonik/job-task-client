import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: async({params})=> fetch(`https://job-task-server-xi.vercel.app/service/${params.id}`)
            }
        ]
    }
]);