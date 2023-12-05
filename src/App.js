import { useState} from 'react';
import MonthContext from './context/monthcontext';
import Table from './components/table';
import Statistics from './components/statistics';
import BarChartDetails from './components/barchart';
import TopSection from './components/topSection';
import './App.css';

const App = () => {
  
  const [month, changeMonth] = useState(1)
  const [searchText, changeSearchText] = useState("")


  const updateSearchText = (value) => (changeSearchText(value))

  const updateMonth = (month) => (changeMonth(month))

  return (
    <div className="app-container">
      <MonthContext.Provider value={{month, searchText, changeMonth: updateMonth,updateSearchText}}>
        <TopSection/>
        <Table/>
        <Statistics/>
        <BarChartDetails/>
      </MonthContext.Provider>
      </div>
  )
}

export default App;
