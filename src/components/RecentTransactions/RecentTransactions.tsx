import React from "react";
import "./RecentTransactions.css";
import { ReactComponent as Trx } from "../../assets/trx.svg"; // your icon
import Arrowup from "../../assets/arrow-up.svg"; // your arrow icon
import Flights from "../../assets/flight.svg"; // your icon
import  Storage  from "../../assets/storage.svg"; // your icon
import  Bsns  from "../../assets/bsns.svg"; // your icon
import Next from '../../assets/next.svg';

const transactions = [
  {
    id: 1,
    title: "Hamleys",
    date: "20 May 2020",
    amount: "+ S$ 150",
    description: "Refund on debit card",
    positive: true,
    iconColor: "rtx-blue",
    ico:Storage
  },
  {
    id: 2,
    title: "Hamleys",
    date: "20 May 2020",
    amount: "- S$ 150",
    description: "Charged to debit card",
    positive: false,
    iconColor: "rtx-green",
    ico:Flights
  }
];

export default function RecentTransactions() {
  return (
    <div className="rtx-card">
      <div className="rtx-card-header">
        <span className="rtx-icon"><Trx/></span>
        <span className="text-head">Recent transactions</span>
        <span className="arrow-up-ico"><img src={Arrowup}/></span>
      </div>
      <div className="rtx-card-content">
        {transactions.map((tx) => (
          <div key={tx.id} className="rtx-transaction">
            <div className={`rtx-transaction-icon ${tx.iconColor}`}>
                <img src={tx.ico}/>
            </div>
            <div className="rtx-transaction-details">
              <span className="rtx-title">{tx.title}</span>
              <p className="rtx-date">{tx.date}</p>
              <div className="rtx-description">
               <div className="img-bsns"> <img src={Bsns}/> </div> 
               <div>{tx.description}</div>
               </div>
            </div>
  <div className="ml-auto rtx-amount-container">
  <div className={`rtx-amount ${tx.positive ? "rtx-positive" : "rtx-negative"}`}>
    {tx.amount}
  </div>
  <img src={Next} alt="next icon" className="next-icon"/>
</div>
          </div>
        ))}
    
      </div>
          <div className="rtx-view-more">
          <button>View all card transactions</button>
        </div>
    </div>
  );
}
