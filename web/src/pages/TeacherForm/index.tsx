import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import warningIcon from "../../assets/icons/warning.svg";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import SelectInput from "../../components/SelectInput";

const TeacherForm: React.FC = () => {
  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher o formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome Completo" name="name" />

          <Input label="Avatar" name="avatar" />

          <Input label="WhatsApp" name="whatsapp" />

          <TextArea label="Biografia" name="bio" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

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

          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>

          <div className="schedule-item">
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

            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
