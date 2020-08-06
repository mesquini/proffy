import React, { useCallback } from "react";

import wpIcon from "../../assets/icons/whatsapp.svg";

import "./styles.css";
import { ITeacherItem } from "../../pages/TeacherList";
import api from "../../services/api";

interface IProps {
  teacher: ITeacherItem;
}

const TeacherItem: React.FC<IProps> = ({ teacher }) => {
  const handleCreateNewConnection = useCallback(() => {
    api.post("/connections", {
      user_id: teacher.id,
    });
  }, [teacher]);

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          href={`https://wa.me/55${teacher.whatsapp}`}
          onClick={handleCreateNewConnection}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wpIcon} alt="whatsapp" /> Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
