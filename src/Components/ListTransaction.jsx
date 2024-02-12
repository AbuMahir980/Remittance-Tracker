import React from 'react'
import TransactionRow from './TransactionRow'

const ListTransaction = ({ transactions, deleteTransaction, updateTransaction }) => {
    return (
        <div className=' m-auto drop-shadow-2xl  shadow-xl rounded-lg'>
            <table>
            <thead>
                <tr className="grid grid-cols-6 gap-5 m-auto text-center">
                <th>Sender</th>
                <th>Recipient</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => (
                <TransactionRow key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} updateTransaction={updateTransaction} />
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default ListTransaction