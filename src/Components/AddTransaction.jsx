import React, { useState } from 'react'

const AddTransaction = ({addTransaction}) => {
    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTransaction({sender, recipient, amount: parseInt(amount), date, category});
        setSender('');
        setRecipient('');
        setAmount('');
        setDate('');
        setCategory('personal');
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit} className="flex justify-between gap-5">
                <input type="text" placeholder="Sender" value={sender} onChange={e => setSender(e.target.value)} className="p-1 pl-2 rounded-md text-blue-900" />
                <input type="text" placeholder="Recipient" value={recipient} onChange={e => setRecipient(e.target.value)} className="p-1 pl-2 rounded-md text-blue-900" />
                <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} className="p-1 pl-2 rounded-md text-blue-900" />
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className="p-1 pl-2 rounded-md text-blue-900"/>
                <select value={category} onChange={e => setCategory(e.target.value)} className="p-1 pl-2 rounded-md text-blue-900">
                    <option value="personal" className="pr-2">Personal</option>
                    <option value="business">Business</option>
                </select>
                <button type="submit" className="p-1 pl-2 pr-2 rounded-md bg-blue-900 text-white font-bold">Submit</button>
            </form>
        </div>
    )
}

export default AddTransaction