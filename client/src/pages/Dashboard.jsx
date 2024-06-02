import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import InputForm from '../components/InputForm';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ipRange, setIpRange] = useState("");
  const navigate = useNavigate();
  const handleScan = (ev) => {
    ev.preventDefault();
    axios.post("/scan",{
      ip_range:ipRange 
    })
    .then((data) => {
      
    })
    .catch((err) => {console.log(err)});    
  }

  const handleChaos = (ev) => {
    ev.preventDefault();
    axios.post("/scan",{
      ip_range: "192.168.17.130"
    })
    .then((data) => {
      
    })
    .catch((err) => {console.log(err)}); 
  }

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          {/* <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
           <InputForm />             
          </div> */}
            {/* <iframe src="http://localhost:3000/d/bdnluk1r1gcg0b/alerts-overview?orgId=1&refresh=30s&from=1717365041387&to=1717366841387" width="100%" height="1000" style={{height:"1000"}} frameborder="0"></iframe> */}
            <iframe src="http://localhost:3000/d-solo/bdnluk1r1gcg0b/alerts-overview?orgId=1&refresh=30s&from=1717365041387&to=1717366841387&panelId=8" width="450" height="200" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/bdnluk1r1gcg0b/alerts-overview?orgId=1&refresh=30s&from=1717365041387&to=1717366841387&panelId=2" width="450" height="200" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/bdnluk1r1gcg0b/alerts-overview?orgId=1&refresh=30s&from=1717365041387&to=1717366841387&panelId=6" width="450" height="200" frameborder="0"></iframe>
            <iframe src="https://play.grafana.org/d-solo/000000012/grafana-play-home?orgId=1&from=1717364337027&to=1717367937027&panelId=2" width="450" height="200" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/fdnlwfhdcfd34c/test-example?orgId=1&from=1717346470145&to=1717368070145&panelId=1" width="450" height="200" frameborder="0"></iframe>
        </main>

      </div>
      
    </div>
  );
}

export default Dashboard;
