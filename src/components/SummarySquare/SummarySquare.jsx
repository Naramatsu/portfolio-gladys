import React from "react";
import "./SummarySquare.style.scss";

const SummarySquare = ({ children, className, ...rest }) => (
  <section {...rest} className={`summary-square ${className}`}>
    {children}
  </section>
);

export default SummarySquare;
