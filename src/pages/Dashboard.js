import React from 'react';
import Header from '../components/Header/Header';
import Slidebar from '../Container/Sidebar/Slidebar';

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Slidebar />
            </div>
            <div className="col-sm-9"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
