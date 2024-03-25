import React from "react";
import "./BookingPage.css";
import Card from "./Card";
import CardData from './CardData'

const BookingNowPage = () => {
  return (
    <div>
      <div className="booking-now-container">
        <div className="booking-now-container-text">
          <h1>
            Dental Excellence Starts <br />
            Here: Your Guide to a <br />
            Brighter, Healthier <br></br>
            Smile
          </h1>
          <div className="Booking-Now-button-container">
            {" "}
            <button className="Booking-Now-button">
              Booking Now{" "}
              <img
                className="header-button-icon"
                src="Vector.png"
                alt="vector"
              />
            </button>
            <img className="button-bg-img" src="Subtract.png" alt="vector" />
          </div>
        </div>
        <div className="smiling-women-image-container">
          <img src="Frame849.png" alt="" />
        </div>
      </div>
      <div className="booking-page-card-container">
        <Card details={CardData}/>      </div>
    </div>
  );
};

export default BookingNowPage;
