import Chart from "../../components/charts/chart";
import Featuredinfo from "../../components/featuredinfo/featuredinfo";
import "./home.css"
import { userdata } from "../../components/charts/domydata";
import Widgetbig from "../../components/widgetbig/widgetbig";
import Widgetsmall from "../../components/widgetsmall/widgetsmall";
import { RouterProvider } from "react-router-dom";
const Home=()=>{
    return( 
        
        <div className="home">
        <Featuredinfo/>
        <Chart data={userdata} title="Sales Analyticss" grid dataKey="Active User"/>
        <div className="homeWidgets">
            <Widgetbig/>
            <Widgetsmall/>
        </div>
    </div>
    
    );
}
export default Home;