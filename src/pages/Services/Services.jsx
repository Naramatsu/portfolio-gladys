import React from "react";
import SummarySquare from "../../components/SummarySquare";
import Container from "react-bootstrap/Container";
import "./Services.style.scss";
import { myServicesLabel, servicesList } from "./Services.data";

const Services = () => (
  <main className="services" id="services">
    <h2>{myServicesLabel}</h2>
    <Container className="services-container">
      {servicesList.map(({ icon, label, description }, index) => (
        <SummarySquare key={index} className="card">
          <img src={icon} alt="icon" />
          <h3>{label}</h3>
          <p>{description}</p>
        </SummarySquare>
      ))}
    </Container>
  </main>
);

export default Services;
