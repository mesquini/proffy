import React, { useCallback, ReactNode } from "react";
import { Image } from "react-native";

import { Container, TopBar, Title, Header } from "./styles";

import backIcon from "../../assets/icons/back.png";
import logoImage from "../../assets/logo.png";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<IProps> = ({ title, children, headerRight }) => {
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

      <Header>
        <Title>{title}</Title>

        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
