import React from 'react'
import Header from '../Components/Header';
import { Userprofile } from '../Components/Data/data';
import Footer from '../Components/Footer';

const Dashboard = () => {
    
    return (
        <div>
            <Header user={Userprofile}/>
            <Footer />
        </div>
    )
}

export default Dashboard;