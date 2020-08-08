import React, { useCallback, useEffect, useState } from "react";

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  StudyButton,
  ButtonText,
  StudyButtonImage,
  GiveClassesButton,
  GiveClassesButtonImage,
  TotalConnections,
  TotalConnectionsImage,
} from "./styles";

import landingImg from "../../assets/landing.png";
import studyIcon from "../../assets/icons/study.png";
import giveClassesIcon from "../../assets/icons/give-classes.png";
import heartIcon from "../../assets/icons/heart.png";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("/connections").then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  const handleNavigationToGiveClassesPage = useCallback(() => {
    navigate("GiveClasses");
  }, [navigate]);

  const handleNavigationToStudyPages = useCallback(() => {
    navigate("Study");
  }, [navigate]);

  return (
    <Container>
      <Banner source={landingImg} />

      <Title>
        Seja bem-vindo, {"\n"}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <StudyButton onPress={handleNavigationToStudyPages}>
          <StudyButtonImage source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </StudyButton>

        <GiveClassesButton onPress={handleNavigationToGiveClassesPage}>
          <GiveClassesButtonImage source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </GiveClassesButton>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizados{" "}
        <TotalConnectionsImage source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
