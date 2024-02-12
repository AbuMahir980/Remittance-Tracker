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
            <div className='grid grid-cols-6 gap-5 px-5 justify-center text-center drop-shadow-2xl my-3'>
            <input type="text" name="sender" value={updatedTransaction.sender} onChange={handleChange} className='p-1 pl-2 rounded-md text-center w-32 text-blue-900' />
            <input type="text" name="recipient" value={updatedTransaction.recipient} onChange={handleChange} className='p-1 pl-2 rounded-md text-center w-32 ml-1 text-blue-900' />
            <input type="number" name="amount" value={updatedTransaction.amount} onChange={handleChange} className='p-1 pl-2 rounded-md text-center w-32 ml-1 text-blue-900' />
            <input type="date" name="date" value={updatedTransaction.date} onChange={handleChange} className='p-1 pl-2 rounded-md text-center w-32 text-blue-900' />
            <select name="category" value={updatedTransaction.category} onChange={handleChange} className='p-1 pl-2 rounded-md text-center w-32 text-blue-900' >
                <option value="personal" className='text-blue-900'>Personal</option>
                <option value="business" className='text-blue-900'>Business</option>
            </select>
            <button onClick={handleUpdate} className='p-1 pl-2 text-center w-28 rounded-md bg-blue-900 text-white ml-2'>Save</button>
            </div>
        ) : (
            <div className="bg-white grid grid-cols-6 gap-5 m-auto drop-shadow-2xl border-b-2 font-bold border-white text-blue text-center px-5 py-2">
            <td className=' text-center p'>{transaction.sender}</td>
            <td className='text-center'>{transaction.recipient}</td>
            <td className='text-center'>{transaction.amount}</td>
            <td className='text-center'>{transaction.date}</td>
            <td className='text-center'>{transaction.category}</td>
            <td className="flex gap-5">
                <button onClick={() => setIsEditing(true)} className="p-1 pl-2 pr-2 rounded-md bg-blue-900 text-white font-bold">Edit</button>
                <button onClick={handleDelete} className="p-1 pl-2 pr-2 rounded-md bg-blue-900 text-white font-bold">Delete</button>
            </td>
            </div>
        )}
        </tr>
    );
}

export default TransactionRow;