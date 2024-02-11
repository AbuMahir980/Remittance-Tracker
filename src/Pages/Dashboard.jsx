import React, { useState } from 'react'
import Header from '../Components/Header';
import { Userprofile } from '../Components/Data/data';
import { initialTransactions } from '../Components/Data/data';
import Footer from '../Components/Footer';
import AddTransaction from '../Components/AddTransaction';
import FilterTransaction from '../Components/FilterTransaction';

const Dashboard = () => {
    const [transactions, setTransactions] = useState(initialTransactions);
    // const [filter, setFilter] = useState('');
    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };
    return (
        <div>
            <Header user={Userprofile}/>
            <div className='h-[80vh] flex flex-col justify-start items-center'>
                <h1 className="text-center mt-5 mb-5 font-black text-3xl text-blue-900">Dashboard</h1>
                <AddTransaction addTransaction={addTransaction}/>
                {/* <FilterTransaction setFilter={setFilter}/> */}
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;