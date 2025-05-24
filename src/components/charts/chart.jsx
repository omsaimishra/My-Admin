import "./chart.css"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart=({grid,title,dataKey})=>{
    const data = [
  {
    name: 'Jan',
   "Active User": 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
   "Active User": 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
     "Active User": 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
     "Active User": 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
     "Active User": 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
     "Active User": 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
     "Active User": 3490,
    pv: 4300,
    amt: 2100,
  },
    {
    name: 'August',
     "Active User": 4490,
    pv: 4300,
    amt: 2100,
  },
    {
    name: 'September',
     "Active User": 5490,
    pv: 4300,
    amt: 2100,
  },
    {
    name: 'October',
     "Active User": 6490,
    pv: 4300,
    amt: 2100,
  },
    {
    name: 'November',
     "Active User": 7490,
    pv: 4300,
    amt: 2100,
  },
    {
    name: 'December',
     "Active User": 9490,
    pv: 4300,
    amt: 9100,
  },

];
    return(
        <div className="chart">
            <h3 className="charttitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                <Tooltip/>
               {grid && <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5"/> }
            </LineChart>
            </ResponsiveContainer>
        </div> 
    );
}
export default Chart;