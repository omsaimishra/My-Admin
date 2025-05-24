import {TrendingDownOutlined} from "@mui/icons-material"
import "./featuredinfo.css"
const Featuredinfo=()=>{
return (
    <div className="featured">
        <div className="fearuredItem">
            <span className="featuredTitle">Revanue</span>
        
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2450</span>
            <span className="featruredMoneyrate"> -11.4 <TrendingDownOutlined/></span>
        </div>
        <span className="featuredsublastmonth">Compared to last Month</span>
    </div>
      <div className="fearuredItem">
            <span className="featuredTitle">Sales</span>
        
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4450</span>
            <span className="featruredMoneyrate"> -1.4 <TrendingDownOutlined className="featureicon"/></span>
        </div>
        <span className="featuredsublastmonth">Compared to last Month</span>
    </div>
     <div className="fearuredItem">
            <span className="featuredTitle">Cost</span>
        
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2255</span>
            <span className="featruredMoneyrate"> +.4 <TrendingDownOutlined className="featureicon featuredicondown"/></span>
        </div>
        <span className="featuredsublastmonth">Compared to last Month</span>
    </div>
    
    </div>
);
}
export default Featuredinfo;