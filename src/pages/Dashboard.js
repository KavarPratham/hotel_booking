import React, { useContext } from "react";
import { MyContext } from "../Context";
import Table from "../components/Table";

export default function Dashboard() {
  const context = useContext(MyContext);
  let rooms = context.filteredCheckedInRooms;
  const columns = ["Room", "Booked By", "Phone Number", "Action"];

  if (!context.isAdmin) {
    return (
      <div className="container text-center mt-5">
        <h1 className="text-danger display-4">Access Denied</h1>
        <p className="lead text-muted">You are not authorized to view this page.</p>
      </div>
    );
  }

  return (
    <div className="container pt-1">
      <div className="title my-4 text-center">
        <h2 className="display-5 text-primary font-weight-bold">Booked Rooms Dashboard</h2>
        <p className="text-light">Manage all the rooms currently booked by users</p>
      </div>

      <form className="my-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input
              className="form-control form-control-lg bg-white text-dark border-primary"
              name="searchKey"
              value={context.searchKey}
              type="text"
              placeholder="Search by room slug"
              onChange={(event) => context.searchBy(event)}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      </form>

      {rooms.length < 1 ? (
        <div className="text-center my-5">
          <h4 className="text-warning">No rooms are currently checked in</h4>
        </div>
      ) : (
        <div className="table-responsive bg-white p-4 rounded shadow-sm border border-primary">
          <Table columns={columns} data={rooms} checkout={context.checkout} />
        </div>
      )}
    </div>
  );
}
