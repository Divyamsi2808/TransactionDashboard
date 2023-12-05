import { useState, useEffect, useContext } from 'react';
import MonthContext from '../../context/monthcontext';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
    Tooltip
  } from "recharts"

import "./index.css"





const BarChartDetails  = () => {

    const [barChartData, setBarChartData] = useState({});
    const {month} = useContext(MonthContext)

    useEffect(() => {
        fetchBarchartData()
      }, [month]);


      const fetchBarchartData = async () => {
        const data = await fetch(`http://localhost:5000/bar-chart?month=${month}`)
        const barChartData = await data.json()
        setBarChartData(barChartData)
      }

    return (
        <div className='bar-chart'>
            <h1>Transactions Bar Chart</h1>
            <div>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart width="100%" height={500}  data={barChartData}>
                        <XAxis dataKey="range"
                        tick={{
                            stroke: "Black",
                            strokeWidth: 1,
                          }}
                        />
                        <YAxis 
                        tick={{
                            stroke: "Black",
                            strokeWidth: 0,
                          }}
                        />
                         <Legend
                            wrapperStyle={{
                                padding: 30,
                            }}
                            />
                        <Bar dataKey="itemCount" fill="#3632a8" barSize="14%" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}



export default BarChartDetails