import React from "react";
import "./Footer.style.scss";
import { routes } from "../Header/Header.data";

const Footer = () => (
  <footer className="footer">
    <a href="#home">
      <img src="GM.png" alt="logo" />
    </a>
    <ul>
      {routes.map(({ link, label }, index) => (
        <li key={index}>
          <a href={link}>{label}</a>
        </li>
      ))}
    </ul>
    <p>
      Inspirado en{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wpriverthemes.com/gridxlight/"
      >
        GridX
      </a>
    </p>
  </footer>
);

export default Footer;
