import React from 'react'
import Header from '../Components/Header';
import { Userprofile } from '../Components/Data/data';
import Footer from '../Components/Footer';
import AddTransaction from '../Components/AddTransaction';

const Dashboard = () => {
    
    return (
        <div>
            <Header user={Userprofile}/>
            <AddTransaction />
            <Footer />
        </div>
    )
}

export default Dashboard;