import React from "react";
import Container from "react-bootstrap/Container";
import "./InfiniteSlider.style.scss";

const InfiniteSlider = ({ data, side }) => (
  <Container className="infinite-slider-wrapper">
    {data.map((brand, index) => (
      <section key={index} className={`infinite-slider ${side}`}>
        {brand.map((logo, index2) => (
          <img key={index2} src={logo} alt={`logo-${index2}`} />
        ))}
      </section>
    ))}
  </Container>
);

export default InfiniteSlider;
