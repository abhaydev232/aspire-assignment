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
      <img src={Logo} />
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
          <img src={Home} />

          Home
        </a>
        <a href="#" className="nav-item active" style={{ marginBottom: '15%' }}>
          <img src={Card} />
          Cards
        </a>
        <a href="#" className="nav-item" style={{ marginBottom: '15%' }}>
          <img src={Payments} />

          Payments
        </a>
        <a href="#" className="nav-item" style={{ marginBottom: '15%' }}>
          <img src={Credit} />
          Credit
        </a>
        <a href="#" className="nav-item">
          <img src={Account} />
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
