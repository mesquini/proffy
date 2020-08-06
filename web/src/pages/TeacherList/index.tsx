import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

import "./styles.css";
import SelectInput from "../../components/SelectInput";

const TeacherList: React.FC = () => {
  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Estes são os Proffys disponiveis.">
        <form id="search-teachers">
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
            name="week_day"
            label="Dia da semana"
          />

          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
