import React from 'react'
import Header from '../Components/Header';
import { Userprofile } from '../Components/Data/data';

const Dashboard = () => {
    
    return (
        <div>
            <Header user={Userprofile}/>
        </div>
    )
}

export default Dashboard;