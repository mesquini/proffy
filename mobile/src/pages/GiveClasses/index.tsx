import React, { useCallback } from "react";

import {
  Container,
  Content,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from "./styles";

import giveClassesBgImage from "../../assets/give-classes-background.png";
import { useNavigation } from "@react-navigation/native";

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Content resizeMode="contain" source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar você precisa cadastrar como professor na nossa plataforma
          Web.
        </Description>
      </Content>
      <OkButton onPress={handleGoBack}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default GiveClasses;
