import React, { useCallback, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { Container, ScrollViewTeacherList } from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { ITeacherItem } from "../TeacherList";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    loadFavorites();
  });

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }, []);

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollViewTeacherList
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
      ></ScrollViewTeacherList>

      {favorites.map((teacher: ITeacherItem) => (
        <TeacherItem key={teacher.id} teacher={teacher} favorited />
      ))}
    </Container>
  );
};

export default Favorites;
