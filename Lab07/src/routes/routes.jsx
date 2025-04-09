import {Routes,Route} from "react-router-dom"
import Admin from "../pages/Admin";
import Project from "../pages/Project";
import Teams from "../pages/Teams";

const publicRoutes = [
    {path:'/',component: Admin},
    {path:'/Project',component: Project},
    {path:'/Teams',component: Teams}
]
export {publicRoutes}