import React, { useContext } from "react";
import { MyContext } from "../Context";
import Title from "../components/Title";
import BannerComponent from "../components/BannerComponent";

export default function SingleRoomPage({ match }) {
  const context = useContext(MyContext);
  const room = context.rooms.find(
    (room) => room.room_slug === match.params["room_slug"]
  );
  console.log(room);
  if (!room) {
    return <div className="alert alert-danger">Error: Room not found.</div>;
  } else {
    return (
      <>
        <BannerComponent room={room} />

        <div className="container my-5">
          <Title title="Room Details" />

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h6 className="card-title text-primary text-uppercase">Details</h6>
                  <p className="card-text text-justify text-dark">
                    {room.details}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h6 className="card-title text-primary text-uppercase">Information</h6>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item text-dark">Price: <strong>₹ {room.price_per_night}</strong></li>
                    <li className="list-group-item text-dark">Size: <strong>{room.room_size} sq ft</strong></li>
                    <li className="list-group-item text-dark">Capacity: <strong>Maximum {room.capacity} people</strong></li>
                    <li className="list-group-item text-dark">Meals Included: <strong>{room.meals_included ? "Yes" : "No"}</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Title title="Facilities" />

          <div className="row mt-4">
            {room.special_facilities.length > 0 ? (
              room.special_facilities.map((facility, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card bg-light border-0 shadow-sm mb-4">
                    <div className="card-body text-center">
                      <p className="card-text text-dark font-weight-bold">
                        {facility.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p className="text-muted">No special facilities available for this room.</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
