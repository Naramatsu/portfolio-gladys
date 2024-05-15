import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

import "./App.css";

const App = () => {
  return (
    <main className="App">
      <section className="AppBg">
        <Header />
        <Home />
      </section>
    </main>
  );
};

export default App;
