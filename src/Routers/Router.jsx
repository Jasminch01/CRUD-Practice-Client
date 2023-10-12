import { createBrowserRouter } from "react-router-dom";
import Users from "../Components/Users/Users";
import Layout from "../Layout/Layout";
import App from "../App";
import Update from "../Components/Update/Update";


const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout></Layout>,
        children : [
            {
                path : '/',
                element : <App></App>
            },
            {
                path : '/users',
                element : <Users></Users>,
                loader : ()=> fetch('http://localhost:5000/users')
            },
            {
                path : '/update/:id',
                element : <Update></Update>,
                loader : ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            }
        ]
    },

])

export default Router;