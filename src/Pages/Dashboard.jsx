import React, { useState } from 'react'
import Header from '../Components/Header';
import { Userprofile } from '../Components/Data/data';
import { initialTransactions } from '../Components/Data/data';
import Footer from '../Components/Footer';
import AddTransaction from '../Components/AddTransaction';
import FilterTransaction from '../Components/FilterTransaction';
import ListTransaction from '../Components/ListTransaction';

const Dashboard = () => {
    const [transactions, setTransactions] = useState(initialTransactions);
    const [filter, setFilter] = useState('');

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };
    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };

    const updateTransaction = (id, updatedTransaction) => {
        setTransactions(transactions.map(transaction => (transaction.id === id ? updatedTransaction : transaction)));
    };

    const filteredTransactions = transactions.filter(transaction => {
        if (filter === 'personal') {
        return transaction.category === 'personal';
        } else if (filter === 'business') {
        return transaction.category === 'business';
        } else {
        return true;
        }
    });
    return (
        <div className='bg-white'>
            <Header user={Userprofile}/>
            <div className='w-[90vw] h-[80vh] m-auto drop-shadow-2xl my-10 shadow-xl flex flex-col justify-start items-center rounded-lg'>
                <h1 className="text-center mt-5 mb-5 font-black text-3xl text-blue-900 shadow-xl px-10 py-2 rounded-lg">Dashboard</h1>
                <AddTransaction addTransaction={addTransaction}/>
                <FilterTransaction setFilter={setFilter}/>
                <ListTransaction transactions={filteredTransactions} deleteTransaction={deleteTransaction} updateTransaction={updateTransaction}/>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;