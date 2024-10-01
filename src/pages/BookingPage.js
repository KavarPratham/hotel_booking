import React, { useContext } from "react";
import BookingComponent from "../components/BookingComponent";
import LoginPage from "../pages/LoginPage";
import { MyContext } from "../Context";
import { Redirect } from "react-router-dom";

export default function BookingPage({ history, location }) {
  const context = useContext(MyContext);

  if (!location.state) {
    return <Redirect to="/rooms" />;
  }

  const room = location.state.room;

  if (!context.isUserAuthenticated) {
    return <LoginPage history={history} location={location} />;
  }

  return (
    <div className="text-light">
      <div className="booking-header mb-4 text-center">
        <h2 className="text-primary">Booking for {room.title}</h2>
        <p className="text-muted">Fill in the details below to complete your booking</p>
      </div>
        <BookingComponent room={room} />
    </div>
  );
}
