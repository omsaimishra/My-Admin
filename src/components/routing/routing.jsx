import {createBrowserRouter} from "react-router-dom"
import Userlist from "../../pages/userlist/userlist"
import Home from "../../pages/home/home"
import User from "../user/user"
import { RouterProvider } from "react-router-dom"
import Layout from "./layout"
import Newuser from "../../pages/newuser/newuser"
import Products from "../../pages/prodouct/product"
import Buyproduct from "../../pages/prodouct/buyproduct"
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
        {
  path:"/home",
  element:<Home/>
},
{
    path:"/users",
    element:<Userlist/>
},
{
    path:"/users/:id",
    element:<User/>
},
{
    path:"/newuser",
    element:<Newuser/>
},
{
    path:"/prodouct",
    element:<Products/>
},
{
    path:"/prodouct/:id",
    element:<Buyproduct/>
},
    ]
  }
])

const Routing =()=>{
    return(
        <RouterProvider router={router}/>
    )
}
export default Routing;