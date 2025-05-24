import  "./topbar.css"
import {NotificationsNone,Settings,Language} from '@mui/icons-material';
const Topbar=()=>{
    return (
        <div className="topbar">
            <div className="topbarWraper">
                <div className="topLeft">
                    <span className="logo">osmadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconcontainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                     <div className="topbarIconcontainer">
                        <Settings/>
                        <span className="topIconBadge">2</span>
                    </div>
                     <div className="topbarIconcontainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  alt="" className="topAvatar" />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Topbar;