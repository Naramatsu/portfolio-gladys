import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { loading, phoneFrame, workList, workstitle } from "./Works.data";
import { ACTIVE, DISABLE, LEFT, RIGHT } from "../../constants";
import "./Works.style.scss";

const Works = () => {
  const [counter, setCounter] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", resize);
  }, [screenWidth]);

  const handlerSlideWork = (index) => {
    if (counter === index) return null;
    setCounter(index);
  };

  const isActiveWork = (index) => (index === counter ? ACTIVE : "");

  const leftCalculator = { left: `${counter * -370}px` };

  const handlerLeftCounter = () => {
    if (counter > 0) setCounter((preState) => preState - 1);
  };

  const handlerRightCounter = () => {
    if (counter < workList.length - 1) setCounter((preState) => preState + 1);
  };

  const isDisabledIcon = (side) => {
    if (side === LEFT && counter === 0) return DISABLE;
    if (side === RIGHT && counter === workList.length - 1) return DISABLE;
  };

  return (
    <main className="works">
      <h2>{workstitle}</h2>
      <Container className="works-container">
        <section className="works-list" style={{ ...leftCalculator }}>
          {workList.map((work, index) => {
            if (work?.type === "video")
              return (
                <video
                  key={index}
                  src={work.url}
                  controls={isActiveWork(index)}
                  muted
                  onClick={() => handlerSlideWork(index)}
                  className={isActiveWork(index)}
                >
                  {loading}
                </video>
              );
            return (
              <img
                key={index}
                src={work.url}
                alt={`work_${index}`}
                className={isActiveWork(index)}
                onClick={() => handlerSlideWork(index)}
              />
            );
          })}
        </section>
        <FaAngleLeft
          className={`phone-frame-selectors left  ${isDisabledIcon(LEFT)}`}
          onClick={handlerLeftCounter}
        />
        <img className="phone-frame" src={phoneFrame} alt="phone_frame" />
        <FaAngleRight
          className={`phone-frame-selectors right  ${isDisabledIcon(RIGHT)}`}
          onClick={handlerRightCounter}
        />
      </Container>
    </main>
  );
};

export default Works;
