import MonthContext from "../../context/monthcontext"

import "./index.css"




const TopSection = () => {
    const renderHeading = () => (
        <h1 className="Heading">
            Transaction Dashboard
        </h1>
    )

    const months = [
        { id: 1, month: 'January', value: 1 },
        { id: 2, month: 'February', value: 2 },
        { id: 3, month: 'March', value: 3 },
        { id: 4, month: 'April', value: 4 },
        { id: 5, month: 'May', value: 5 },
        { id: 6, month: 'June', value: 6 },
        { id: 7, month: 'July', value: 7 },
        { id: 8, month: 'August', value: 8 },
        { id: 9, month: 'September', value: 9 },
        { id: 10, month: 'October', value: 10 },
        { id: 11, month: 'November', value: 11 },
        { id: 12, month: 'December', value: 12 },
      ];

    const renderSearchBar = () => (
        <MonthContext.Consumer>
            {
                value => {
                    const {searchText, updateSearchText} = value

                    return (
                        <input
                        id = "search"
                        value={searchText}
                        placeholder="Search..."
                        onChange={(event) => {updateSearchText(event.target.value)}}
                        className="search-bar"
                        />
                    )
                }
            }
        </MonthContext.Consumer>
    )

    const renderMonthField = () => (
        <MonthContext.Consumer>
            {
                value => {
                    const {month, changeMonth} = value
                    return (
                        <select id = "month" value={month} onChange={(event) => (changeMonth(event.target.value))} className="month-input">
                            {months.map((eachObj) => (
                            <option key={eachObj.id} value={eachObj.value}>
                                {eachObj.month}
                            </option>
                            ))}
                        </select>
                    )
                }
            }
        </MonthContext.Consumer>
    )

    return (
        <div className="top-section-container">
            {
                renderHeading()
            }
            <div className="input-containers">
                {
                    renderSearchBar()
                }
                {
                    renderMonthField()
                }
            </div>
        </div>
    )
}


export default TopSection