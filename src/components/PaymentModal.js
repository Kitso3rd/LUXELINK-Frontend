import React, { useState } from "react";

const PaymentModal = ({ item, onClose }) => {
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    setProcessing(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId: item.id,
          itemType: item.type,
          amount: item.price,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Payment successful! 🎉 Your booking is confirmed.");
        onClose();
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred during payment.");
    }

    setProcessing(false);
  };

  return (
    <div className="payment-modal active">
      <div className="payment-content fade-in">
        <h3>Confirm Your Booking</h3>
        <p>
          You’re booking: <strong>{item.name || item.destination}</strong>
        </p>
        <p>
          <strong>Amount:</strong> ${item.price}
        </p>

        <button onClick={handlePayment} disabled={processing}>
          {processing ? "Processing..." : "Proceed to Pay"}
        </button>
        <button
          onClick={onClose}
          style={{
            background: "#ddd",
            color: "#333",
            marginTop: "10px",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
