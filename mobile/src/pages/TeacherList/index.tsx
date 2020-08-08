import React, { useState, useCallback } from "react";
import { Feather } from "@expo/vector-icons/";
import AsyncStorage from "@react-native-community/async-storage";

import {
  Container,
  ScrollViewTeacherList,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from "./styles";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { BorderlessButton } from "react-native-gesture-handler";
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
  const [isFiltersVisible, setFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [teachers, setTeachers] = useState<ITeacherItem[]>([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: ITeacherItem) => {
            return teacher.id;
          }
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }, []);

  const handleTogglerFiltersVisible = useCallback(() => {
    setFiltersVisible(!isFiltersVisible);
  }, [isFiltersVisible]);

  const handleFiltersSubmit = useCallback(async () => {
    loadFavorites();

    const response = await api.get<ITeacherItem[]>("/class", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
    setFiltersVisible(!isFiltersVisible);
  }, [subject, week_day, time, isFiltersVisible]);

  return (
    <Container>
      <PageHeader
        title="Proffys disponiveis"
        headerRight={
          <BorderlessButton onPress={handleTogglerFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <ScrollViewTeacherList
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      >
        {teachers.map((teacher) => (
          <TeacherItem
            key={teacher.id}
            favorited={favorites.includes(teacher.id)}
            teacher={teacher}
          />
        ))}
      </ScrollViewTeacherList>
    </Container>
  );
};

export default TeacherList;
