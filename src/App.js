import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Brands from "./pages/Brands";
import Services from "./pages/Services";

import "./App.css";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="App">
      <section className="AppBg">
        <Header />
        <Home />
        <Services />
        <Works />
        <Brands />
        <ContactMe />
        <Footer />
      </section>
    </main>
  );
};

export default App;
