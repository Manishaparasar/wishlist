import React, { useState } from "react";
import "./paymentForm.module.css"; // Ensure you have the correct path for your CSS file
import forward from "../assets/forward icon.png";
import phonepe from "../assets/phonepe.png";
import paytm from "../assets/paytm.png";
import gpay from "../assets/gpay.png";
import debit from "../assets/debit.png";
import emi from "../assets/emi.png";
import netbanking from "../assets/netbanking.png";
import cash from "../assets/cash.png";
import Footer from "../footer/Footer";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Method:", paymentMethod);
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
  };

  return (
    <div className="payment-form">
      {/* <div className="forward-button-container">
        <img src={forward} alt="forward-icon" />
      </div> */}
      <h2>Select Payment Method</h2>

      <form onSubmit={handleSubmit}>
        <div className="payment-options">
          <h3>Other UPI</h3>

          <label>
            <img src={paytm} alt="paytm-icon" />
            Paytm
            <input
              type="radio"
              value="paytm"
              checked={paymentMethod === "paytm"}
              onChange={handlePaymentMethodChange}
            />
          </label>
          <label>
            <img src={phonepe} alt="phonepe-icon" />
            PhonePe
            <input
              type="radio"
              value="phonepe"
              checked={paymentMethod === "phonepe"}
              onChange={handlePaymentMethodChange}
            />
          </label>
          <label>
            <img src={gpay} alt="Google-pay icon" />
            GPay
            <input
              type="radio"
              value="gpay"
              checked={paymentMethod === "gpay"}
              onChange={handlePaymentMethodChange}
            />
          </label>
          <h3>Credit & Debit Cards</h3>
          <label>
            <img src={debit} alt="debit card image" />
            Credit/Debit Card
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={handlePaymentMethodChange}
            />
          </label>
          {paymentMethod === "card" && (
            <div className="card-details">
              <label>
                Card Number
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </label>
              <label>
                MM/YY
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </label>
              <label>
                CVV
                <input
                  type="text"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </label>
            </div>
          )}
          <h3>More Ways to Pay</h3>
          <label>
            <img src={emi} alt="emi icon " />
            EMI
            <input
              type="radio"
              value="emi"
              checked={paymentMethod === "emi"}
              onChange={handlePaymentMethodChange}
            />
          </label>
          <label>
            <img src={netbanking} alt="netbanking icon" />
            Net Banking
            <input
              type="radio"
              value="netbanking"
              checked={paymentMethod === "netbanking"}
              onChange={handlePaymentMethodChange}
            />
          </label>
          <label>
            <img src={cash} alt="cash icon" />
            Cash on Delivery/ Pay on Delivery
            {/* <br /> */}
            {/* <span>Cash, UPI and Cards accepted.</span> */}
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={handlePaymentMethodChange}
            />
          </label>
        </div>
        <button type="submit">Continue</button>
      </form>
      <Footer />
    </div>
  );
};

export default PaymentForm;
