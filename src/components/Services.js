import React from "react";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { FaWifi, FaBeer, FaShuttleVan, FaHiking } from "react-icons/fa";

export default function Services() {
  const serviceList = [
    {
      serviceName: <FaWifi style={{color:"white"}} />,
      title: "High-Speed Internet Access",
      details:
        "Stay connected with our complimentary high-speed Wi-Fis throughout the hotel. Perfect for business, you'll never be out of touch. Stream your favorite shows or browse with ease, anytime, anywhere.",
    },
    {
      serviceName: <FaBeer style={{color:"white"}} />,
      title: "Craft Beers on the House",
      details:
        "Relish a cold, local craft beer from our extensive selection. Whether you're a fan of IPAs, lagers, or stouts, we've got the perfect brew waiting for you – all free during your stay.",
    },
    {
      serviceName: <FaShuttleVan style={{color:"white"}} />,
      title: "Complimentary Shuttle Service",
      details:
        "Need to get around? Our free shuttle service is here to make your stay more convenient. We'll take you to nearby attractions, the airport, or even a local shopping mall.",
    },
    {
      serviceName: <FaHiking style={{color:"white"}} />,
      title: "Guided Hiking Tours",
      details:
        "Explore the scenic beauty surrounding our hotel with complimentary guided hiking tours. Perfect for outdoor enthusiasts, our hikes offer breathtaking views and a chance to connect with nature.",
    },
  ];

  return (
    <React.Fragment>
      <Title title="Services" />
      <div className="row services align-items-center justify-content my-2">
        {serviceList.map((service, index) => (
          <ServiceCard
            service={service.serviceName}
            title={service.title}
            details={service.details}
            key={index}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
