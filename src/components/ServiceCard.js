import React from "react";
import "./Services.css";

export default function ServiceCard({ service, details, title }) {
  return (
    <div className="col-md-3 mb-1">
      <div className="card service-card dark-card">
        {service}
        <div className="card-body text-center">
          <h6 className="card-title text-primary">{title}</h6>
          <p className="card-text text-justify">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
}
