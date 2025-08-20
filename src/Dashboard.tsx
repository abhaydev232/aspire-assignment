import React from 'react'
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer/MainContainer';

const Dashboard=()=> {
  return (
    <div className="dashboard">
     <Sidebar/>
     <MainContainer/>
    </div>
  );
}

export default Dashboard;
