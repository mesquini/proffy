import React, { useCallback } from "react";
import { Image } from "react-native";

import { Container, TopBar, Title, Description } from "./styles";

import backIcon from "../../assets/icons/back.png";
import logoImage from "../../assets/logo.png";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<IProps> = ({ title, description }) => {
  const { navigate } = useNavigation();
  const handleGoBack = useCallback(() => {
    navigate("Landing");
  }, [navigate]);

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImage} resizeMode="contain" />
      </TopBar>

      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  );
};

export default PageHeader;
