import React from "react";

import wpIcon from "../../assets/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/40439740?s=460&u=16b1551f72c1360ed43a8117dbad0af5e9f70cad&v=4"
          alt="victor"
        />
        <div>
          <strong>Victor mesquini</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>descrição aquii</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={wpIcon} alt="whatsapp" /> Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
