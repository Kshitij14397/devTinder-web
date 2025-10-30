import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";

const Premium = () => {
  const handleBuyClick = async (membershipType) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType,
      },
      { withCredentials: true }
    );

    const { keyId, amount, currency, orderId, notes } = order.data;

    // It should open the Razorpay Dialog Box

    const options = {
      key: keyId,
      amount,
      currency,
      name: "Dev Tinder",
      description: "Connect to other developers",
      order_id: orderId,
      prefill: {
        name: notes.firstName + notes.lastName,
        email: notes.emailId,
        contact: "7897002993",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="m-10">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Silver Membership</h1>
          <ul>
            <li>- Chat with other people</li>
            <li>- 100 Connection Requests per day</li>
            <li>- Blue Tick</li>
            <li>- 3 Months</li>
          </ul>
          <button
            className="btn btn-secondary"
            onClick={() => handleBuyClick("silver")}
          >
            Buy Silver
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Gold Membership</h1>
          <ul>
            <li>- Chat with other people</li>
            <li>- Infinite Connection Requests per day</li>
            <li>- Blue Tick</li>
            <li>- 6 Months</li>
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => handleBuyClick("gold")}
          >
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
