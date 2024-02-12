import React, { useState } from 'react';

const TransactionRow = ({ transaction, deleteTransaction, updateTransaction }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTransaction, setUpdatedTransaction] = useState(transaction);

    const handleDelete = () => {
        deleteTransaction(transaction.id);
    };

    const handleUpdate = () => {
        updateTransaction(transaction.id, updatedTransaction);
        setIsEditing(false);
    };

    const handleChange = e => {
        setUpdatedTransaction({ ...updatedTransaction, [e.target.name]: e.target.value });
    };

    return (
        <tr>
        {isEditing ? (
            <>
            <td><input type="text" name="sender" value={updatedTransaction.sender} onChange={handleChange} /></td>
            <td><input type="text" name="recipient" value={updatedTransaction.recipient} onChange={handleChange} /></td>
            <td><input type="number" name="amount" value={updatedTransaction.amount} onChange={handleChange} /></td>
            <td><input type="date" name="date" value={updatedTransaction.date} onChange={handleChange} /></td>
            <td><select name="category" value={updatedTransaction.category} onChange={handleChange}>
                <option value="personal">Personal</option>
                <option value="business">Business</option>
            </select></td>
            <td><button onClick={handleUpdate}>Save</button></td>
            </>
        ) : (
            <div className="flex justify-between gap-20 m-auto text-center px-5 py-1">
            <td>{transaction.sender}</td>
            <td>{transaction.recipient}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.date}</td>
            <td>{transaction.category}</td>
            <td className="flex gap-5">
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </td>
            </div>
        )}
        </tr>
    );
}

export default TransactionRow;