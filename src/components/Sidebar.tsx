import React from "react";
import "./sidebar.css";
import Logo from "../assets/logi.svg";
import Home from "../assets/home.svg";
import Account from "../assets/account.svg";
import Credit from "../assets/credit.svg";
import Card from "../assets/card.svg";
import Payments from "../assets/payments.svg";


const Sidebar = () => {
  const logoFill = "#00C853";
  return (
    <aside className="sidebar" style={{ textAlign: "left" }}>
      <img src={Logo} alt="logo" />
      <div
        style={{
          color: "#55738c",
          marginTop: "5%",
          fontSize: "15px",
        }}
      >
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </div>

      <nav style={{ marginTop: '20%' }}>
        <a href="#" className="nav-item" style={{ marginBottom: '15%' }}>
          <img src={Home} alt="logo" />

          Home
        </a>
        <a href="#" className="nav-item active" style={{ marginBottom: '15%' }}>
          <img src={Card} alt="logo" />
          Cards
        </a>
        <a href="#" className="nav-item" style={{ marginBottom: '15%' }}>
          <img src={Payments} alt="logo" />

          Payments
        </a>
        <a href="#" className="nav-item" style={{ marginBottom: '15%' }}>
          <img src={Credit} alt="logo" />
          Credit
        </a>
        <a href="#" className="nav-item">
          <img src={Account} alt="logo" />
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
