import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import backIcon from "../../assets/icons/back.svg";

import "./styles.css";

interface IProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<IProps> = ({ children, title, description }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logo} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>
      {children}
    </header>
  );
};

export default PageHeader;
