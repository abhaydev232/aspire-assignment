import React, { useState } from "react";
import "./CardCarousel.css";
import CreditCard from "../CreditCard/CreditCard";
import Show from "../../assets/show.svg";
import { useCardContext } from "../../CardContext"; 

const cards = [
  { name: "Mark Henry", lastDigits: "1234 5678 9123 2020", expiry: "12/20", cvv: "123" },
  { name: "Sarah Lee", lastDigits: "1234 5678 9123 2020", expiry: "05/23", cvv: "123" },
  { name: "David Wong", lastDigits: "1234 5678 9123 2020", expiry: "08/24", cvv: "123" },
];

const CardCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [visible,setVisible]=useState(false);
    const { cards } = useCardContext();

  const next = () => setCurrent((prev) => (prev + 1) % cards.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);


  return (
    <div className="carousel">
      <button onClick={prev} className="nav-btn">‹</button>

      <div className="carousel-window">
           <div className="card-number-show">
      <span><img src={Show}/></span>
      <span className="show-card-no"  onClick={() => setVisible(!visible)}> Show card number</span>
    </div>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div className="carousel-item" key={i}>
              <CreditCard {...card} visible={visible} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={next} className="nav-btn">›</button>

      {/* Dots */}
      <div className="dots">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
