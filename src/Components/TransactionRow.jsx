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
            <div className="bg-blue-900 grid grid-cols-6 gap-5 m-auto drop-shadow-2xl border-b-2 font-bold border-white text-white text-center px-5 py-2">
            <td className=' text-center p'>{transaction.sender}</td>
            <td className='text-center'>{transaction.recipient}</td>
            <td className='text-center'>{transaction.amount}</td>
            <td className='text-center'>{transaction.date}</td>
            <td className='text-center'>{transaction.category}</td>
            <td className="flex gap-5">
                <button onClick={() => setIsEditing(true)} className="p-1 pl-2 pr-2 rounded-md bg-white text-blue-900 font-bold">Edit</button>
                <button onClick={handleDelete} className="p-1 pl-2 pr-2 rounded-md bg-white text-blue-900 font-bold">Delete</button>
            </td>
            </div>
        )}
        </tr>
    );
}

export default TransactionRow;