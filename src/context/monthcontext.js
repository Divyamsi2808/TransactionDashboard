import React from 'react'

const MonthContext = React.createContext({
  month: 1,
  changeMonth: () => {},
  searchText: "",
  updateSearchText: () => {}
})

export default MonthContext