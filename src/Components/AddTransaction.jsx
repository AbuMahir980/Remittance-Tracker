import React, { useState } from 'react'

const AddTransaction = () => {
    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSender('');
        setRecipient('');
        setAmount('');
        setDate('');
        setCategory('personal');
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Sender" value={sender} onChange={e => setSender(e.target.value)} />
                <input type="text" placeholder="Recipient" value={recipient} onChange={e => setRecipient(e.target.value)} />
                <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="personal">Personal</option>
                    <option value="business">Business</option>
                </select>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction