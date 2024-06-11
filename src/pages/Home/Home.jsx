import React from "react";
import Container from "react-bootstrap/Container";
import SummarySquare from "../../components/SummarySquare";

import { GiPolarStar } from "react-icons/gi";
import { SlMagicWand } from "react-icons/sl";

import "./Home.style.scss";
import {
  educationLabel,
  educationList,
  experienceLabel,
  experienceList,
  profilesLabel,
  selfSummary,
  selfSummaryLabel,
  socialMediaLabel,
  socialMediaList,
} from "./Home.data";
import { communityManagerLabel, gladysMendozaLabel } from "../../constants";

import profileImg from "../../assets/profile.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <Container className="grid">
        <SummarySquare className="card profile">
          <img src={profileImg} alt="profile" />
        </SummarySquare>
        <SummarySquare className="row-3 summary">
          <h1>
            <GiPolarStar />
            {selfSummaryLabel}
            <GiPolarStar />
          </h1>
          <section className="card">
            <SlMagicWand className="magic" />
            <h2 className="h2-introduce">
              {gladysMendozaLabel}
              <section className="badge">
                <p>{communityManagerLabel}</p>
              </section>
            </h2>
            {selfSummary}
          </section>
        </SummarySquare>
        <SummarySquare className="row-4 card experience">
          <h3>{experienceLabel}</h3>
          {experienceList.map(({ date, position, company, duties }, index) => (
            <section key={index} className="summary-square-caption">
              <p>{date}</p>
              <h4>{position}</h4>
              <h6>{company}</h6>
              <ul>
                {duties.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </ul>
            </section>
          ))}
        </SummarySquare>
        <SummarySquare className="row-2 card experience">
          <h3>{educationLabel}</h3>
          {educationList.map(({ date, title, entity }, index) => (
            <section key={index} className="summary-square-caption">
              <p>{date}</p>
              <h4>{title}</h4>
              <h6>{entity}</h6>
            </section>
          ))}
        </SummarySquare>
        <SummarySquare className="card bottom row-2">
          <SlMagicWand className="magic" />
          <section className="icons">
            {socialMediaList.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </section>
          <section className="summary-square-social">
            <h5>{profilesLabel}</h5>
            <h3>{socialMediaLabel}</h3>
          </section>
        </SummarySquare>
      </Container>
    </section>
  );
};

export default Home;
