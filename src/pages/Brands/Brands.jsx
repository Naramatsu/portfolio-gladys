import React from "react";
import InfiniteSlider from "../../components/InfiniteSlider";
import { LEFT, RIGHT } from "../../constants";
import { brandsCollabs, brandListLeft } from "./Brands.data.js";
import "./Brands.styles.scss";

const Brands = () => (
  <main className="services" id="brands">
    <h2>{brandsCollabs}</h2>
    <InfiniteSlider data={brandListLeft} side={LEFT} />
    <InfiniteSlider data={brandListLeft} side={RIGHT} />
  </main>
);

export default Brands;
