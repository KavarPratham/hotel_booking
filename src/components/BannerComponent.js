import React from "react";
import { Link } from "react-router-dom";

export default function BannerComponent({ room }) {
  return (
    <>
      <div
        className="jumbotron text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url("${room.cover_image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "50vh",
          backgroundPosition: "center",
        }}
      >
        {/* Room Title */}
        <h1 className="display-4 font-weight-bold text-white mb-3">
          {room.title}
        </h1>

        {/* Divider */}
        <hr className="my-3 bg-light" style={{ width: "50%" }} />

        {/* Room Availability/Booking */}
        {room.is_booked ? (
          <p className="lead btn btn-danger btn-lg px-5 py-2">Reserved</p>
        ) : (
          <p className="lead">
            <Link
              to={{
                pathname: `/book/${room.id}`,
                state: { room },
              }}
              className="btn btn-primary btn-lg px-5 py-2"
              role="button"
            >
              Book Room
            </Link>
          </p>
        )}
      </div>
    </>
  );
}
