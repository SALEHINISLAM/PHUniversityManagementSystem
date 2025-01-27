import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routeGenerator } from "../utlis/routes.generator";
import { adminPaths } from "./admin.routes";
import { studentPaths } from "./student.routes";
import { facultyPaths } from "./faculty.routes";

const router=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path:"about",
                element:<About/>
            },{
                path:"contact",
                element:<Contact/>
            }
        ]
    },
    {
        path:"/admin",
        element:<App/>,
        children:routeGenerator(adminPaths)
    },
    {
        path:"/student",
        element:<App/>,
        children:routeGenerator(studentPaths)
    },
    {
        path:"/faculty",
        element:<App/>,
        children:routeGenerator(facultyPaths)
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"*",
        element:<h1>Not Found</h1>
    }
])

export default router;