import React, { useState, useCallback, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

import "./styles.css";
import SelectInput from "../../components/SelectInput";
import api from "../../services/api";

export interface ITeacherItem {
  name: string;
  cost: number;
  id: number;
  subject: string;
  whatsapp: string;
  avatar: string;
  bio: string;
}

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [teachers, setTeachers] = useState<ITeacherItem[]>([]);

  const handleSearchTeachers = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const response = await api.get<ITeacherItem[]>("/class", {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(response.data);
    },
    [subject, week_day, time]
  );

  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Estes são os Proffys disponiveis.">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
          <SelectInput
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Portugues", label: "Portugues" },
              { value: "Matematica", label: "Matematica" },
              { value: "Fisica", label: "Fisica" },
              { value: "Quimica", label: "Quimica" },
              { value: "Espanhol", label: "Espanhol" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ed. Fisica", label: "Ed. Fisica" },
              { value: "Geografia", label: "Geografia" },
            ]}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            label="Matéria"
            name="subject"
          />

          <SelectInput
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-Feira" },
              { value: "2", label: "Terça-Feira" },
              { value: "3", label: "Quarta-Feira" },
              { value: "4", label: "Quinta-Feira" },
              { value: "5", label: "Sexta-Feira" },
              { value: "6", label: "Sabádo" },
            ]}
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            name="week_day"
            label="Dia da semana"
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeacherList;
