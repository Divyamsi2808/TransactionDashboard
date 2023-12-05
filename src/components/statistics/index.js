import { useState, useEffect, useContext } from 'react';
import MonthContext from '../../context/monthcontext';

import "./index.css"


const Statistics = () => { 
    
    const [statistics, setStatistics] = useState({});
    const {month} = useContext(MonthContext)

    useEffect(() => {
        fetchStatisticsData()
    } , [month])

    const fetchStatisticsData = async () => {
        const data = await fetch(`http://localhost:5000/statistics?month=${month}`)
        const statisticsData = await data.json()
        setStatistics(statisticsData)
    }

    return (
        <div className="statistics">
            <h1>Transactions Statistics</h1>
            <div>
                <div>
                    <h1>
                    Total Sale Amount:
                    </h1>
                    <p>
                    {statistics.totalSaleAmount}
                    </p>
                </div>
                <div>
                    <h1>
                    Total Sold Items:
                    </h1>
                    <p>{statistics.totalSoldItems}
                    </p>
                </div>
                <div>
                    <h1>Total Not Sold Items:
                    </h1>
                    <p>{statistics.totalNotSoldItems}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Statistics