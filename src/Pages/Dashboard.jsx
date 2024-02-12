import React, { useState } from 'react'
import Header from '../Components/Header';
import { Userprofile } from '../Components/Data/data';
import { initialTransactions } from '../Components/Data/data';
import Footer from '../Components/Footer';
import AddTransaction from '../Components/AddTransaction';
import FilterTransaction from '../Components/FilterTransaction';
import ListTransaction from '../Components/ListTransaction';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

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
            <div className='w-[90vw] min-h-[80vh] m-auto drop-shadow-2xl my-5 shadow-xl flex flex-col justify-start items-center rounded-lg pb-5'>
                <h1 className="text-center mt-5 mb-5 font-black text-3xl text-blue-900 shadow-xl px-10 py-2 rounded-lg">Dashboard</h1>
                <div className='bg-white drop-shadow-2xl rounded-lg py-5 px-5 mb-16 mt-10'>
                    {/* <LineChart width={800} height={300} data={initialTransactions} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                    </LineChart> */}
                    <LineChart width={730} height={250} data={initialTransactions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} className='text-white bg-white rounded-lg'>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="amount" style={{color:'fff'}}/>
                        {/* <YAxis /> */}
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="category" stroke="#8884d8" />
                        <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <AddTransaction addTransaction={addTransaction}/>
                <FilterTransaction setFilter={setFilter}/>
                <ListTransaction transactions={filteredTransactions} deleteTransaction={deleteTransaction} updateTransaction={updateTransaction}/>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;