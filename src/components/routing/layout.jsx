import Topbar from "../topbar/topbar"
import Sidebar from "../sidebar.jsx/sidebar"
import "../../App.css"
import { Outlet } from "react-router-dom"
const Layout = ()=>{
  return(
    <>
    <Topbar/>
       <div className="container"> 
        <Sidebar/>
       <Outlet/>
       </div>
    
   
    </>
  )
}
export default Layout;