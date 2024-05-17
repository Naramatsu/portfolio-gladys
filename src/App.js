import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

import "./App.css";
import Works from "./pages/Works";

const App = () => {
  return (
    <main className="App">
      <section className="AppBg">
        <Header />
        <Home />
        <Works />
      </section>
    </main>
  );
};

export default App;
