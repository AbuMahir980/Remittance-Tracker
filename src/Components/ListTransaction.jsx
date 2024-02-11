import React from 'react'
import TransactionRow from './TransactionRow'

const ListTransaction = ({ transactions, deleteTransaction, updateTransaction }) => {
    return (
        <div>
            <table>
            <thead>
                <tr>
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