import React from 'react'
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer/MainContainer';
import { CardProvider } from './CardContext';

const Dashboard=()=> {
  return (
    <div className="dashboard">
     <Sidebar/>
     <CardProvider>
     <MainContainer/>
     </CardProvider>
    </div>
  );
}

export default Dashboard;
