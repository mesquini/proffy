import React, { useCallback, useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import { useHistory } from "react-router-dom";

import "./styles.css";
import warningIcon from "../../assets/icons/warning.svg";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import SelectInput from "../../components/SelectInput";
import api from "../../services/api";

const TeacherForm: React.FC = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [cost, setCost] = useState("");
  const [subject, setSubject] = useState("");

  const history = useHistory();

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: "",
      from: "",
      to: "",
    },
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: "",
        from: "",
        to: "",
      },
    ]);
  }, [scheduleItems]);

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position)
          return {
            ...scheduleItem,
            [field]: value,
          };
        return scheduleItem;
      });

      setScheduleItems(updateScheduleItems);
    },
    [scheduleItems]
  );

  const handleCreateClass = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const data = {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      };

      api
        .post("/classes", data)
        .then(() => {
          alert("Cadastrado com sucesso!");
          history.push("/");
        })
        .catch((err) => {
          alert("deu ruim :(");
          console.log(err);
        });
    },
    [name, avatar, whatsapp, bio, cost, subject, scheduleItems, history]
  );

  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher o formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              label="Nome Completo"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              required
              onChange={(e) => setAvatar(e.target.value)}
            />

            <Input
              label="WhatsApp"
              name="whatsapp"
              value={whatsapp}
              maxLength={11}
              required
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <TextArea
              label="Biografia"
              name="bio"
              value={bio}
              required
              onChange={(e) => setBio(e.target.value)}
            />
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <Input
              label="Custo da sua hora por aula"
              name="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={scheduleItem.week_day} className="schedule-item">
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
                  value={scheduleItem.week_day}
                  onChange={(e) =>
                    setScheduleItemValue(index, "week_day", e.target.value)
                  }
                  name="week_day"
                  label="Dia da semana"
                />

                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItemValue(index, "from", e.target.value)
                  }
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItemValue(index, "to", e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
