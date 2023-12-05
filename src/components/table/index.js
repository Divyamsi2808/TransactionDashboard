import { useState, useEffect, useContext } from "react";
import { GrNext, GrPrevious  } from "react-icons/gr";
import MonthContext from "../../context/monthcontext";
import "./index.css"


const Table = () => {
    const [transactions, setTransactions] = useState([]);
    const [currentPage, updateCurrentPage] = useState(1);
    const [totalPages, updateTotalPages] = useState(10);
    const {searchText, month} = useContext(MonthContext)

    useEffect(() => {
        fetchTableData()
    }, [searchText, month, currentPage])

    const fetchTableData = async () => {
        const data = await fetch(`http://localhost:5000/transactions?page=${currentPage}&searchText=${searchText}`)
        const tableData = await data.json()
        setTransactions(tableData.data)
        updateCurrentPage(parseInt(tableData.currentPage))
        updateTotalPages(tableData.totalPages)
    }

    const renderPagination = () => (
        <div className="pagination-container">
            <button className="page-btn" onClick={() => updateCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                {
                <GrPrevious />
                }
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button className="page-btn" onClick={() => updateCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                {
                    <GrNext/>
                }
            </button>
        </div>
    )

    return (
        <div className="table-container">
            <h1 className="table-heading">Transactions Table</h1>
            <table className="transaction-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                    <td>{transaction.title}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {
                renderPagination()
            }
        </div>
    )
}

export default Table