import React, { useCallback } from "react";

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

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

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
        Total de 123 conexões já realizados{" "}
        <TotalConnectionsImage source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
