import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const Banner = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: Poppins_400Regular;
`;

export const TitleBold = styled.Text`
  font-weight: bold;
  font-family: Poppins_600SemiBold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const StudyButton = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #9871f5;
  border-radius: 8px;
  padding: 24px;
`;

export const StudyButtonImage = styled.Image`
  margin-bottom: 40px;
`;

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 20px;
`;

export const GiveClassesButton = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #04d361;
  border-radius: 8px;
  padding: 24px;
`;

export const GiveClassesButtonImage = styled.Image`
  margin-bottom: 40px;
`;

export const TotalConnections = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  line-height: 20px;
  font-size: 12px;
  max-width: 140px;
  margin-top: 40px;
`;

export const TotalConnectionsImage = styled.Image``;
