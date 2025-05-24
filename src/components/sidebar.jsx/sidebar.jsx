import "./sidebar.css"
import { LineStyle,Timeline,TrendingUp,Person ,Store,Group,Leaderboard,Email,Feedback,Message, Mail,ManageAccountsOutlined
,TimelineOutlined,ReportProblemOutlined} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom"

const Sidebar=()=>{
   
    return(
        <div className="sidebar">
    <div className="sidebarwraper">
        <div className="sidebarmenu">
            <h3 className="sidebartitle">Dashboard</h3>
            <ul className="sidebarlist">
                <NavLink to="/home">
                <li className="sidebarlistitem">
                    <LineStyle className="sidebaricon"/>
                Home
                </li>
                </NavLink>
                 <li className="sidebarlistitem" >
                    <Timeline className="sidebaricon"/>
                Analytics
                </li>
                 <li className="sidebarlistitem">
                    <TrendingUp className="sidebaricon"/>
                Sales
                </li>
                
            </ul>
        </div>
        <div className="sidebarmenu">
            <h3 className="sidebartitle">Quickmenu</h3>
            <ul className="sidebarlist">
            <Link to="/newuser" >
                <li className="sidebarlistitem">
                    <Person className="sidebaricon"/>
                Users
                </li>
                </Link>
                <Link to="/prodouct">
                 <li className="sidebarlistitem" >
                    <Store className="sidebaricon"/>
                Products
                </li>
                </Link>
                <Link to="/users">
                 <li className="sidebarlistitem">
                    <Group className="sidebaricon"/>
                UserList
                </li>
                </Link>
                <li className="sidebarlistitem">
                    <Leaderboard className="sidebaricon"/>
                Reports
                </li>
                
            </ul>
        </div>
        <div className="sidebarmenu">
            <h3 className="sidebartitle">Notification</h3>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">
                    <Mail className="sidebaricon"/>
                Mail
                </li>
                 <li className="sidebarlistitem" >
                    <Feedback className="sidebaricon"/>
                Feedback
                </li>
                 <li className="sidebarlistitem">
                    <Message className="sidebaricon"/>
                Message
                </li>
                
            </ul>
        </div>
        <div className="sidebarmenu">
            <h3 className="sidebartitle">Staff</h3>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">
                    <ManageAccountsOutlined className="sidebaricon"/>
                Manage
                </li>
                 <li className="sidebarlistitem" >
                    <TimelineOutlined className="sidebaricon"/>
                Analytics
                </li>
                 <li className="sidebarlistitem">
                    <ReportProblemOutlined className="sidebaricon"/>
                Reports
                </li>
                
            </ul>
        </div>
    </div>
        </div>

    );
}
export default Sidebar;