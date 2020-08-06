import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import landing from "../../assets/landing.svg";

import studyIcon from "../../assets/icons/study.svg";
import giveClassesIcon from "../../assets/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/icons/purple-heart.svg";

import api from "../../services/api";

import "./styles.css";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("/connections").then((response) => {
      setTotalConnections(response.data.total);
    });
  }, [totalConnections]);

  return (
    <div id="page-lading">
      <div id="page-lading-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landing} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
