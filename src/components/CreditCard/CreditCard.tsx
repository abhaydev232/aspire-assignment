import React, { useEffect } from "react";
import "./CreditCard.css";
import Home  from "../../assets/home.svg";
import Visa from "../../assets/visa.svg";

// Props interface
interface CreditCardProps {
  name: string;
  lastDigits?: string;
  expiry: string;
  cvv: string;
  visible: boolean;
}

const CreditCard: React.FC<CreditCardProps> = ({ name, lastDigits, expiry, cvv, visible }) => {

  useEffect(() => {
    // You can handle visibility side-effects here if needed
  }, [visible]);

  // Mask card number with dots except last 4 digits
  const maskCardBigDots = (card: string) => {
    const digits = card.replace(/\D/g, "");
    if (digits.length <= 4) return digits;

    const last4 = digits.slice(-4);
    const maskedCount = digits.length - 4;
    const maskedDots = "●".repeat(maskedCount);

    // Group masked dots in chunks of 4
    const groups = maskedDots.match(/.{1,4}/g) || [];
    return `${groups.join(" ")} ${last4}`.trim();
  };

  // Sample card number, you can replace it with props.lastDigits if needed
  const cardNumber = lastDigits || "1234 5678 9123 4567";

  return (
    <div className="card">
      <div className="card-header">
       <img src={Home} alt="logo"/> aspire
      </div>

      <div className="card-name">{name}</div>

      <div className="card-number">
        {visible ? cardNumber : maskCardBigDots(cardNumber)}
      </div>

      <div className="card-footer">
        <span>Thru: {expiry}</span>
        <div className="cvv-wrapper">
          <span>CVV: </span>
          <span className="cvv">{visible ? cvv : cvv.replace(/\d/g, "*")}</span>
        </div>
      </div>

      <div className="card-brand">
        <img src={Visa} alt="Visa" />
      </div>
    </div>
  );
};

export default CreditCard;
